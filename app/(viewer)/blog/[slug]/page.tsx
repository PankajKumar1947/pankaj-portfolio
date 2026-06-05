import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogViewer } from "./_components/blog-viewer";
import { getNotionPost, type BlogPost } from "@/services/notion.service";
import { profile } from "@/config/profile";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function fetchBlog(slug: string): Promise<BlogPost | null> {
  try {
    const res = await getNotionPost(slug);
    if (res) return res;
  } catch (error) {
    // Fallback to service directly if API fetch fails (e.g. during build-time pre-rendering)
  }
  return await getNotionPost(slug);
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlog(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  const title = post.title;
  const description = post.brief;

  return {
    title: `${title} | Blog`,
    description,
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [profile.name],
      images: post.coverImage?.url ? [post.coverImage.url] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.coverImage?.url ? [post.coverImage.url] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await fetchBlog(slug);

  if (!post) {
    notFound();
  }

  return <BlogViewer post={post} />;
}


