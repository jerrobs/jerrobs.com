import { CollectionEntry, getCollection } from "astro:content"

export async function getIssues() {
  const articles = await getCollection("issue")

  return articles
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    )
}
