import { CollectionEntry, getCollection } from "astro:content"

export async function getReferences() {
  const articles = await getCollection("reference")

  return articles.sort((a, b) =>
    a.data.cslItem.id
      .toLocaleString()
      .localeCompare(b.data.cslItem.id.toLocaleString())
  )
}
