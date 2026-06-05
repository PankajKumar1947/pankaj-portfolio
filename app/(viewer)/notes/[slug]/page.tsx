import { redirect } from "next/navigation";
import { getNotionNoteBySlug } from "@/services/notion.service";

interface NoteDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoteDetailPage({
  params,
}: NoteDetailPageProps) {
  const { slug } = await params;
  const note = await getNotionNoteBySlug(slug);

  if (!note || !note.pages || note.pages.length === 0) {
    redirect("/notes");
  }

  const firstPageId = note.pages[0]._id;
  redirect(`/notes/${slug}/${firstPageId}`);
}

