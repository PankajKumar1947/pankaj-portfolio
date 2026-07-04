import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { InfiniteBlogs } from "@/components/common/infinite-blogs";
import { getNotionPosts } from "@/services/notion.service";
import { siteConfig } from "@/config/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: `My Blog | ${siteConfig.name}`,
  description: "Read my latest articles and thoughts on web development.",
};

export default async function BlogPage() {
  const posts = await getNotionPosts();

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




