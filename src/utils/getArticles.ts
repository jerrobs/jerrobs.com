import { CollectionEntry, getCollection } from "astro:content"

export async function getArticles() {
  const articles = await getCollection("article")

  return articles
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    )
}
