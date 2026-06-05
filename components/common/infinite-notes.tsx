"use client";

import { useEffect, useState, useRef } from "react";
import { NoteCard } from "./note-card";
import type { NotionNote } from "@/services/notion.service";
import { Loader } from "./loader";

interface InfiniteNotesProps {
  initialNotes: NotionNote[];
}

export function InfiniteNotes({ initialNotes }: InfiniteNotesProps) {
  const [displayedNotes, setDisplayedNotes] = useState<NotionNote[]>([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  
  const limit = 4;

  useEffect(() => {
    setDisplayedNotes(initialNotes);
    // If the initial count is less than the limit, we don't have page 2.
    if (initialNotes.length < limit) {
      setHasMore(false);
    }
  }, [initialNotes]);

  useEffect(() => {
    if (!hasMore || isFetching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsFetching(true);
          
          // Fetch next page from API
          fetch(`/api/notes?page=${page}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
              if (data && Array.isArray(data.notes)) {
                setDisplayedNotes((prev) => [...prev, ...data.notes]);
                setPage((prev) => prev + 1);
                setHasMore(data.hasMore);
              } else {
                setHasMore(false);
              }
            })
            .catch((err) => {
              console.error("Error loading more notes:", err);
              setHasMore(false);
            })
            .finally(() => {
              setIsFetching(false);
            });
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isFetching, page, initialNotes]);

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedNotes.map((note) => (
          <NoteCard key={note._id} note={note as any} />
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="flex justify-center py-6">
          <Loader />
        </div>
      )}
    </div>
  );
}
