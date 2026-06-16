import { PageHeader } from "@/components/common/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <>
      <PageHeader
        title="My Blog"
        subtitle="Insights and tutorials on modern web development, sharing my journey and learnings."
        gradient
      />

      <div className="mx-auto max-w-(--max-width) px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl flex flex-col gap-4 min-h-[180px]"
            >
              {/* Title Skeleton */}
              <Skeleton className="h-6 w-4/5" />
              
              {/* Brief / Paragraph Skeletons */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              
              {/* Footer Skeleton */}
              <div className="flex items-center justify-between gap-2 pt-2 mt-auto">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-3 w-16" />
                  <span className="text-muted-foreground/30">•</span>
                  <Skeleton className="h-3 w-20" />
                </div>
                
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
