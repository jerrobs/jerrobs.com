import { CollectionEntry, getCollection } from "astro:content"

export async function getArticles() {
  const articles = await getCollection("article")

  return articles.filter(({ data }) => !data.draft)
}
