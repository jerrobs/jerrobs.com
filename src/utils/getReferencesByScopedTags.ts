import type { ScopedTag } from "@content/_schemas"
import type { CollectionEntry } from "astro:content"

export const getReferencesByScopedTag = (
  references: CollectionEntry<"reference">[],
  scopedTag: ScopedTag
) =>
  references.filter(item =>
    item.data.scopedTags?.find(
      t => t.tag === scopedTag.tag && t.scope === scopedTag.scope
    )
  )
