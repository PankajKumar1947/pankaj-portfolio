import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/api/axios";
import { noteQueries } from "@/react-query/note";
import type { NotionNotePage } from "@/services/notion.service";

export const useNotePage = (slug: string, pageId: string) => {
  return useQuery({
    queryKey: noteQueries.pageContent(slug, pageId).key,
    queryFn: async () => {
      const response = await axiosInstance.get<NotionNotePage>(
        noteQueries.pageContent(slug, pageId).endpoint
      );
      return response.data;
    },
    enabled: !!slug && !!pageId,
  });
};
