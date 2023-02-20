import type { CollectionEntry } from "astro:content"

export const sortArticles = (articles: CollectionEntry<"article">[]) =>
  articles
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    )
