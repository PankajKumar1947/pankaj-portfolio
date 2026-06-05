"use client";

import { useEffect, useState, useRef } from "react";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/services/notion.service";
import { Loader } from "./loader";

interface InfiniteBlogsProps {
  initialPosts: BlogPost[];
}

export function InfiniteBlogs({ initialPosts }: InfiniteBlogsProps) {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);
  
  const limit = 4;
  const hasMore = displayedPosts.length < initialPosts.length;

  useEffect(() => {
    setDisplayedPosts(initialPosts.slice(0, limit));
  }, [initialPosts]);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setDisplayedPosts((prev) => [
              ...prev,
              ...initialPosts.slice(prev.length, prev.length + limit),
            ]);
          }, 400);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, initialPosts]);

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {displayedPosts.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i % limit} />
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
