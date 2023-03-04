import type { CollectionEntry } from "astro:content"

export const getArticlesByIssue = (
  articles: CollectionEntry<"article">[],
  issue: string
) => articles.filter(article => article.data.issue === issue)
