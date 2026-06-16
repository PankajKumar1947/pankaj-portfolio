import { PageHeader } from "@/components/common/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/config/site";

export default function NotesLoading() {
  return (
    <>
      <PageHeader
        title={siteConfig.notes.title}
        subtitle={siteConfig.notes.description}
        gradient
      />

      <div className="mx-auto max-w-(--max-width) px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative flex min-h-20 items-center overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm rounded-t-2xl rounded-b-2xl rounded-r-2xl"
            >
              {/* Accent Spine Skeleton */}
              <div className="absolute left-0 top-0 h-full w-1 bg-muted-foreground/10" />

              <div className="flex w-full items-center justify-between gap-6 px-6 py-4">
                <div className="flex flex-1 flex-col gap-1.5 min-w-0 sm:flex-row sm:items-center sm:gap-6">
                  {/* Date Skeleton */}
                  <Skeleton className="h-4 w-20 shrink-0" />

                  {/* Title & Description Skeleton */}
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>

                {/* Right side: Meta & Action Skeletons */}
                <div className="flex items-center gap-5 shrink-0">
                  <div className="hidden items-center gap-1.5 md:flex">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-6" />
                  </div>
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
