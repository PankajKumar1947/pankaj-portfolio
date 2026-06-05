import { NextResponse } from "next/server";
import { getNotionPost } from "@/services/notion.service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await getNotionPost(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found in Notion" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
