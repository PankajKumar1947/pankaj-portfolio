import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotePageViewer } from "../_components/note-page-viewer";
import { getNotionNoteBySlug } from "@/services/notion.service";
import { profile } from "@/config/profile";

interface NotePageProps {
  params: Promise<{ slug: string; pageId: string }>;
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNotionNoteBySlug(slug);

  if (!note) {
    return { title: "Note Not Found" };
  }

  const title = note.title;
  const description =
    note.description || `Read "${note.title}" — notes by ${profile.name}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug, pageId } = await params;
  const note = await getNotionNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return <NotePageViewer note={note as any} initialPageId={pageId} />;
}

