import type { CollectionEntry } from "astro:content"

export const getSortedReferences = (
  references: CollectionEntry<"reference">[]
) =>
  references.sort((a, b) =>
    a.data.cslItem.id.toString().localeCompare(b.data.cslItem.id.toString())
  )
