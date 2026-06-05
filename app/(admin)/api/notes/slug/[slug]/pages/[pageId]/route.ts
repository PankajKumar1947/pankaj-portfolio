import { NextResponse } from "next/server";
import { getNotionNotePageContent } from "@/services/notion.service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; pageId: string }> }
) {
  try {
    const { pageId } = await params;
    const content = await getNotionNotePageContent(pageId);
    
    return NextResponse.json({
      _id: pageId,
      content,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch page" },
      { status: 500 }
    );
  }
}

