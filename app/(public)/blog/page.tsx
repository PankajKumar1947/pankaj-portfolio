import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { InfiniteBlogs } from "@/components/common/infinite-blogs";
import { getNotionPosts, type BlogPost } from "@/services/notion.service";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `My Blog | ${siteConfig.name}`,
  description: "Read my latest articles and thoughts on web development.",
};

async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/blogs`, { next: { revalidate: 60 } });
    if (res.ok) return await res.json();
  } catch (error) {
    // Fallback to service directly if API fetch fails (e.g. during build-time pre-rendering)
  }
  return await getNotionPosts();
}

export default async function BlogPage() {
  const posts = await fetchBlogs();

  return (
    <>
      <PageHeader
        title="My Blog"
        subtitle="Insights and tutorials on modern web development, sharing my journey and learnings."
        gradient
      />

      <div className="mx-auto max-w-(--max-width) px-4 pb-20 sm:px-6 lg:px-8">
        {posts.length > 0 ? (
          <InfiniteBlogs initialPosts={posts} />
        ) : (
          <div className="flex h-64 flex-col items-center justify-center gap-4 text-center">
            <p className="text-muted-foreground">No blog posts found from Notion.</p>
            <p className="text-sm text-muted-foreground/60">
              Check if the Notion integration token and Page/Database ID are correctly configured.
            </p>
          </div>
        )}
      </div>
    </>
  );
}




