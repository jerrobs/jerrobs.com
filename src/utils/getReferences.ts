import { getCollection } from "astro:content"

export async function getReferences(tag?: string) {
  const references = await getCollection("reference")

  const filteredReferences = tag
    ? references.filter(reference => reference.data.tags?.includes(tag))
    : references

  return filteredReferences.sort((a, b) =>
    a.data.cslItem.id
      .toLocaleString()
      .localeCompare(b.data.cslItem.id.toLocaleString())
  )
}
