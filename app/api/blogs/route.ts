import { NextResponse } from "next/server";
import { getNotionPosts } from "@/services/notion.service";

export async function GET() {
  try {
    const posts = await getNotionPosts();
    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch blogs from Notion" },
      { status: 500 }
    );
  }
}
