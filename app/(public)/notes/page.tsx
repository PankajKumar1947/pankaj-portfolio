import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { InfiniteNotes } from "@/components/common/infinite-notes";
import { getNotionNotesPaginated } from "@/services/notion.service";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.notes.title,
  description: siteConfig.notes.description,
  openGraph: {
    title: siteConfig.notes.title,
    description: siteConfig.notes.description,
  },
};

export const revalidate = 60;

export default async function NotesPage() {
  const { notes } = await getNotionNotesPaginated(1, 4);

  return (
    <>
      <PageHeader
        title={siteConfig.notes.title}
        subtitle={siteConfig.notes.description}
        gradient
      />

      <div className="mx-auto max-w-(--max-width) px-4 pb-20 sm:px-6 lg:px-8">
        {notes.length > 0 ? (
          <InfiniteNotes initialNotes={notes} />
        ) : (
          <div className="flex h-64 items-center justify-center text-muted-foreground">
            <p>No notes found from Notion.</p>
          </div>
        )}
      </div>
    </>
  );
}




