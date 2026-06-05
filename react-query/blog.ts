export const blogQueries = {
  all: {
    key: ["blogs"],
    endpoint: "/api/blogs",
  },
  bySlug: (slug: string) => ({
    key: ["blogs", "slug", slug],
    endpoint: `/api/blogs/slug/${slug}`,
  }),
};
