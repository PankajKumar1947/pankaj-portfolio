import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/api/axios";
import { blogQueries } from "@/react-query/blog";
import type { BlogPost } from "@/services/notion.service";

export const useBlogs = () => {
  return useQuery({
    queryKey: blogQueries.all.key,
    queryFn: async () => {
      const response = await axiosInstance.get<BlogPost[]>(blogQueries.all.endpoint);
      return response.data;
    },
  });
};

export const useBlog = (slug: string) => {
  return useQuery({
    queryKey: blogQueries.bySlug(slug).key,
    queryFn: async () => {
      const response = await axiosInstance.get<BlogPost>(blogQueries.bySlug(slug).endpoint);
      return response.data;
    },
    enabled: !!slug,
  });
};
