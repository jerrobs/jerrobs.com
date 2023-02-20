import type { CollectionEntry } from "astro:content"
import type { ScopedTag } from "@content/_schemas"

export const getUniqueTags = (items: CollectionEntry<"article">[]) => {
  let scopedTags: ScopedTag[] = []
  const filteredItems = items.filter(({ data }) => !data.draft)
  filteredItems.forEach(item => {
    scopedTags = [...scopedTags, ...item.data.scopedTags]
  })

  const tagSet = new Set(scopedTags.map(scopedTag => JSON.stringify(scopedTag)))

  return [...tagSet].map(t => JSON.parse(t)) as ScopedTag[]
}
