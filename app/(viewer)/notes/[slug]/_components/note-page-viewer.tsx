"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, FileText, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/common/theme-toggle";
import type { NotionNote, NotionNotePage } from "@/services/notion.service";
import { useNotePage } from "@/hooks/query/use-note";
import { Loader } from "@/components/common/loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

interface NotePageViewerProps {
  note: NotionNote;
  initialPageId: string;
}

const CopyButton = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-green-500" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
};

export function NotePageViewer({ note, initialPageId }: NotePageViewerProps) {
  const router = useRouter();
  const sortedPages = [...note?.pages].sort((a, b) => a.order - b.order);

  const currentIndex = sortedPages.findIndex(p => p._id?.toString() === initialPageId);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  const currentPage = sortedPages[safeIndex] as NotionNotePage;
  const totalPages = sortedPages.length;

  const { data: pageContent, isLoading: isLoadingPage } = useNotePage(
    note?.slug,
    currentPage?._id as string
  );

  const handlePageChange = (index: number) => {
    const pageId = sortedPages[index]._id?.toString();
    router.push(`/notes/${note.slug}/${pageId}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-(--max-width) items-center justify-between px-2">
          {/* Left: Back button + Note title */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/notes">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-lg font-semibold tracking-tight">
              {note?.title}
            </h1>
          </div>

          {/* Right: Page selector + theme toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Page title + prev/next navigation */}
      <div className="mt-4 flex flex-col items-center gap-2 mx-auto max-w-(--max-width) px-2 w-full">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex-1 flex justify-start">
            <Select
              value={String(safeIndex)}
              onValueChange={(val) => handlePageChange(Number(val))}
            >
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortedPages.map((page, index) => (
                  <SelectItem key={String(page._id)} value={String(index)}>
                    {page.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <h2 className="hidden sm:block flex-1 text-center text-lg font-semibold tracking-tight">
            {currentPage?.title}
          </h2>

          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={safeIndex === 0}
                onClick={() => handlePageChange(safeIndex - 1)}
                className="gap-1.5 max-w-[140px] md:max-w-[200px]"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline truncate">
                  {safeIndex > 0 ? sortedPages[safeIndex - 1].title : ""}
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={safeIndex === totalPages - 1}
                onClick={() => handlePageChange(safeIndex + 1)}
                className="gap-1.5 max-w-[140px] md:max-w-[200px]"
              >
                <span className="hidden sm:inline truncate">
                  {safeIndex < totalPages - 1
                    ? sortedPages[safeIndex + 1].title
                    : ""}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Page Title */}
        <h2 className="sm:hidden text-center text-base font-bold tracking-tight mt-1">
          {currentPage?.title}
        </h2>
      </div>

      {/* Body */}
      <main className="flex-1 m-2">
        <div className="mx-auto max-w-(--max-width) p-6 sm:p-8 lg:p-10 bg-card rounded-lg border border-border/40 shadow-sm">
          {/* Page content */}
          <div className="min-h-[50vh] flex flex-col justify-start overflow-hidden">
            {isLoadingPage ? (
              <div className="flex h-64 items-center justify-center p-8">
                <Loader />
              </div>
            ) : pageContent?.content ? (
              <div className="prose dark:prose-invert prose-slate max-w-none 
                prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-20
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-ul:marker:text-primary
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6 prose-ol:marker:text-primary
                prose-li:text-muted-foreground prose-li:my-2
                prose-a:text-primary hover:prose-a:underline 
                prose-pre:bg-transparent prose-pre:p-0
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-muted-foreground
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                prose-a:text-primary hover:prose-a:underline">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkEmoji, remarkBreaks]}
                  rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append", content: { type: "text", value: "" } }]]}
                  components={{
                    code({ inline, className, children, ...props }: React.ComponentPropsWithoutRef<'code'> & { inline?: boolean }) {
                      const match = /language-(\w+)/.exec(className || "");
                      const codeContent = String(children).replace(/\n$/, "");

                      return !inline && match ? (
                        <div className="not-prose overflow-hidden rounded-2xl border border-border/50 shadow-2xl bg-[#282c34]">
                          <div className="flex items-center justify-between bg-black/20 px-5 py-2.5 border-b border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1.5 mr-2">
                                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                              </div>
                              <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                                {match[1]}
                              </span>
                            </div>
                            <CopyButton content={codeContent} />
                          </div>
                          <SyntaxHighlighter
                            style={oneDark as unknown as { [key: string]: React.CSSProperties }}
                            language={match[1]}
                            PreTag="div"
                            showLineNumbers={true}
                            lineNumberStyle={{
                              minWidth: "2.5em",
                              paddingRight: "1em",
                              color: "rgba(255,255,255,0.2)",
                              textAlign: "right",
                              userSelect: "none",
                            }}
                            customStyle={{
                              margin: 0,
                              padding: "1rem",
                              fontSize: "0.9rem",
                              background: "transparent",
                              lineHeight: "1.6",
                            }}
                          >
                            {codeContent}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    img: ({ node, ...props }: React.ComponentPropsWithoutRef<'img'> & { node?: unknown }) => (
                      <img
                        {...props}
                        className="mx-auto rounded-xl shadow-lg border border-border/10 my-4"
                        loading="lazy"
                      />
                    ),
                    a: ({ node, ...props }: React.ComponentPropsWithoutRef<'a'> & { node?: unknown }) => {
                      const isInternal = props.href?.startsWith("#");
                      return (
                        <a
                          {...props}
                          target={isInternal ? undefined : "_blank"}
                          rel={isInternal ? undefined : "noopener noreferrer"}
                        />
                      );
                    },
                  }}
                >
                  {pageContent.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 p-12 text-center transition-colors hover:border-border/80">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted/10">
                  <FileText className="h-6 w-6 text-muted-foreground/40" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold tracking-tight text-foreground/80">
                  Note content not found
                </h3>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Pagination at the bottom */}
      <footer className="mt-auto py-10 border-t border-border/5 mx-auto max-w-(--max-width)">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={safeIndex === 0}
              onClick={() => handlePageChange(safeIndex - 1)}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Prev
            </Button>

            {sortedPages.map((_, index) => (
              <Button
                key={index}
                variant={index === safeIndex ? "default" : "outline"}
                size="sm"
                className="min-w-9"
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              disabled={safeIndex === totalPages - 1}
              onClick={() => handlePageChange(safeIndex + 1)}
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
