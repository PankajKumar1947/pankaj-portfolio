import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notionToken = process.env.NOTION_TOKEN;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const memoryCache = new Map<string, CacheEntry<any>>();
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

async function cacheGetOrFetch<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl = CACHE_TTL_MS
): Promise<T> {
  const cached = memoryCache.get(key);
  const now = Date.now();
  if (cached && now - cached.timestamp < ttl) {
    return cached.data;
  }
  const data = await fetchFn();
  memoryCache.set(key, { data, timestamp: now });
  return data;
}

const getCachedBlocksChildrenList = async (blockId: string): Promise<any> => {
  return cacheGetOrFetch(`blocks-children-${blockId}`, () =>
    notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    })
  );
};

const getCachedPageRetrieve = async (pageId: string): Promise<any> => {
  return cacheGetOrFetch(`page-retrieve-${pageId}`, () =>
    notion.pages.retrieve({
      page_id: pageId,
    })
  );
};

const sanitizeNotionId = (id: string): string => {
  let cleaned = id.trim();
  if (cleaned.includes("/")) {
    const parts = cleaned.split("/");
    cleaned = parts[parts.length - 1];
  }
  if (cleaned.includes("?")) {
    cleaned = cleaned.split("?")[0];
  }
  const hex32Match = cleaned.match(/[a-f0-9]{32}/i);
  if (hex32Match) {
    return hex32Match[0];
  }
  const uuidMatch = cleaned.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i);
  if (uuidMatch) {
    return uuidMatch[0];
  }
  return cleaned;
};

const parentId = process.env.NOTION_BLOG_PAGE_ID
  ? sanitizeNotionId(process.env.NOTION_BLOG_PAGE_ID)
  : "";

const notesParentId = process.env.NOTION_NOTES_PARENT_ID
  ? sanitizeNotionId(process.env.NOTION_NOTES_PARENT_ID)
  : "";

const notion = new Client({
  auth: notionToken || "",
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  } | null;
  publishedAt: string;
  readTimeInMinutes: number;
  views: number;
  reactionCount: number;
  responseCount: number;
  content?: {
    markdown: string;
    html?: string;
  };
}

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const extractTextFromRichText = (property: any): string => {
  if (!property) return "";
  if (property.type === "rich_text" && Array.isArray(property.rich_text)) {
    return property.rich_text.map((t: any) => t.plain_text).join("");
  }
  if (property.type === "formula" && property.formula) {
    return property.formula.string || "";
  }
  return "";
};

const mapPageToPost = (page: any): BlogPost => {
  let title = "Untitled";
  if (page.properties) {
    const titleProp = Object.values(page.properties).find(
      (p: any) => p.type === "title"
    ) as any;
    if (titleProp && Array.isArray(titleProp.title)) {
      title = titleProp.title.map((t: any) => t.plain_text).join("");
    }
  }

  // Find slug, summary, date properties if they exist
  let slug = slugify(title);
  let brief = "Click to read more about this post.";
  let publishedAt = page.created_time || new Date().toISOString();

  if (page.properties) {
    // Look for slug
    const slugProp = Object.entries(page.properties).find(([key]) =>
      /slug/i.test(key)
    )?.[1];
    if (slugProp) {
      const slugVal = extractTextFromRichText(slugProp);
      if (slugVal) slug = slugVal;
    }

    // Look for summary / brief
    const summaryProp = Object.entries(page.properties).find(([key]) =>
      /summary|brief|description/i.test(key)
    )?.[1];
    if (summaryProp) {
      const summaryVal = extractTextFromRichText(summaryProp);
      if (summaryVal) brief = summaryVal;
    }

    // Look for publication date
    const dateProp = Object.entries(page.properties).find(([key]) =>
      /date|publish/i.test(key)
    )?.[1] as any;
    if (dateProp && dateProp.type === "date" && dateProp.date?.start) {
      publishedAt = dateProp.date.start;
    }
  }

  // Extract cover
  let coverUrl = null;
  if (page.cover) {
    if (page.cover.type === "external") {
      coverUrl = page.cover.external.url;
    } else if (page.cover.type === "file") {
      coverUrl = page.cover.file.url;
    }
  }

  // Calculate estimated read time (rough baseline for cards, updated with actual content word count later)
  const readTimeInMinutes = 3;

  return {
    id: page.id,
    title,
    brief,
    slug,
    coverImage: coverUrl ? { url: coverUrl } : null,
    publishedAt,
    readTimeInMinutes,
    views: 0,
    reactionCount: 0,
    responseCount: 0,
  };
};

export const getNotionPosts = async (): Promise<BlogPost[]> => {
  if (!notionToken || !parentId) {
    console.warn("NOTION_TOKEN or NOTION_BLOG_PAGE_ID is not set.");
    return [];
  }

  return cacheGetOrFetch("all-notion-posts", async () => {
    try {
      // Try to retrieve as a database first
      try {
        const dbResponse = await (notion.databases as any).query({
          database_id: parentId,
          filter: {
            or: [
              {
                property: "Status",
                status: {
                  equals: "Published",
                },
              },
              {
                property: "Status",
                select: {
                  equals: "Published",
                },
              },
            ],
          },
        });

        return dbResponse.results
          .map(mapPageToPost)
          .sort((a: BlogPost, b: BlogPost) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      } catch (dbError: any) {
        // If retrieving as a database fails, fall back to fetching children blocks of a parent page
        const blockResponse = await getCachedBlocksChildrenList(parentId);

        const childPageBlocks = blockResponse.results.filter(
          (block: any) => block.type === "child_page"
        );

        const posts = await Promise.all(
          childPageBlocks.map(async (block: any) => {
            try {
              const pageDetails = await getCachedPageRetrieve(block.id);
              return mapPageToPost(pageDetails);
            } catch (pageError) {
              console.error(`Error retrieving child page details for block ${block.id}:`, pageError);
              return null;
            }
          })
        );

        return posts
          .filter((post): post is BlogPost => post !== null)
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          );
      }
    } catch (error) {
      console.error("Error fetching Notion posts:", error);
      return [];
    }
  });
};

export const getNotionPost = async (slug: string): Promise<BlogPost | null> => {
  if (!notionToken || !parentId) {
    return null;
  }

  try {
    const posts = await getNotionPosts();
    // Find the post matching the slug
    const matchingPost = posts.find((p) => p.slug === slug);
    if (!matchingPost) {
      return null;
    }

    return cacheGetOrFetch(`post-content-${matchingPost.id}`, async () => {
      // Convert page content blocks to markdown
      const mdblocks = await n2m.pageToMarkdown(matchingPost.id);
      const mdString = n2m.toMarkdownString(mdblocks);
      const markdown = mdString.parent || "";

      // Calculate dynamic read time based on word count
      const wordCount = markdown.split(/\s+/).length;
      const readTimeInMinutes = Math.max(1, Math.ceil(wordCount / 225));

      return {
        ...matchingPost,
        readTimeInMinutes,
        content: {
          markdown,
        },
      };
    });
  } catch (error) {
    console.error(`Error fetching Notion post for slug "${slug}":`, error);
    return null;
  }
};

export interface NotionNotePage {
  _id: string;
  noteId?: string;
  title: string;
  content?: string;
  order: number;
}

export interface NotionNote {
  _id: string;
  title: string;
  slug: string;
  description: string;
  pages: NotionNotePage[];
  status: "published";
  createdAt: string;
  updatedAt: string;
}

export const getNotionNotes = async (): Promise<NotionNote[]> => {
  if (!notionToken || !notesParentId) {
    console.warn("NOTION_TOKEN or NOTION_NOTES_PARENT_ID is not set.");
    return [];
  }

  return cacheGetOrFetch("all-notion-notes", async () => {
    try {
      const blockResponse = await getCachedBlocksChildrenList(notesParentId);

      const childPageBlocks = blockResponse.results.filter(
        (block: any) => block.type === "child_page"
      );

      const notes: NotionNote[] = await Promise.all(
        childPageBlocks.map(async (block: any) => {
          const title = block.child_page?.title || "Untitled Note";
          const slug = slugify(title);
          const createdAt = block.created_time || new Date().toISOString();
          const updatedAt = block.last_edited_time || createdAt;

          let pagesList: NotionNotePage[] = [];
          if (block.has_children) {
            try {
              const pagesBlockResponse = await getCachedBlocksChildrenList(block.id);
              const subPageBlocks = pagesBlockResponse.results.filter(
                (subBlock: any) => subBlock.type === "child_page"
              );
              pagesList = subPageBlocks.map((subBlock: any, index: number) => ({
                _id: subBlock.id,
                noteId: block.id,
                title: subBlock.child_page?.title || `Page ${index + 1}`,
                order: index + 1,
              }));
            } catch (err) {
              console.error(`Error fetching child pages for block ${block.id}:`, err);
            }
          }

          return {
            _id: block.id,
            title,
            slug,
            description: "Study notes and references.",
            pages: pagesList,
            status: "published" as const,
            createdAt,
            updatedAt,
          };
        })
      );

      return notes.sort(
        (a: NotionNote, b: NotionNote) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } catch (error) {
      console.error("Error fetching Notion notes:", error);
      return [];
    }
  });
};

export const getNotionNoteBySlug = async (slug: string): Promise<NotionNote | null> => {
  if (!notionToken || !notesParentId) {
    return null;
  }

  try {
    const notes = await getNotionNotes();
    const found = notes.find((n) => n.slug === slug);
    if (!found) return null;

    return cacheGetOrFetch(`note-slug-details-${found._id}`, async () => {
      // Retrieve child pages list only when loading a single note page
      const pagesBlockResponse = await getCachedBlocksChildrenList(found._id);

      const subPageBlocks = pagesBlockResponse.results.filter(
        (subBlock: any) => subBlock.type === "child_page"
      );

      const pagesList: NotionNotePage[] = subPageBlocks.map(
        (subBlock: any, index: number) => ({
          _id: subBlock.id,
          noteId: found._id,
          title: subBlock.child_page?.title || `Page ${index + 1}`,
          order: index + 1,
        })
      );

      return {
        ...found,
        pages: pagesList,
      };
    });
  } catch (err) {
    console.error(`Error fetching note pages details for slug ${slug}:`, err);
    return null;
  }
};

export const getNotionNotePageContent = async (pageId: string): Promise<string> => {
  if (!notionToken) return "";
  return cacheGetOrFetch(`note-page-content-${pageId}`, async () => {
    try {
      const mdblocks = await n2m.pageToMarkdown(pageId);
      const mdString = n2m.toMarkdownString(mdblocks);
      return mdString.parent || "";
    } catch (err) {
      console.error(`Error converting page ${pageId} to markdown:`, err);
      return "";
    }
  });
};

export interface PaginatedNotesResult {
  notes: NotionNote[];
  hasMore: boolean;
  total: number;
}

export const getNotionNotesPaginated = async (
  page: number,
  limit: number
): Promise<PaginatedNotesResult> => {
  if (!notionToken || !notesParentId) {
    return { notes: [], hasMore: false, total: 0 };
  }

  try {
    const allNotes = await getNotionNotes();
    const total = allNotes.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const notes = allNotes.slice(startIndex, endIndex);
    const hasMore = endIndex < total;

    return {
      notes,
      hasMore,
      total,
    };
  } catch (error) {
    console.error("Error fetching Notion notes paginated:", error);
    return { notes: [], hasMore: false, total: 0 };
  }
};


