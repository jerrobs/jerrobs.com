import type { ScopedTag } from "@content/_schemas"
import type { CollectionEntry } from "astro:content"

export const getArticlesByScopedTags = (
  articles: CollectionEntry<"article">[],
  scopedTag: ScopedTag
) =>
  articles.filter(item =>
    item.data.scopedTags?.find(
      t => t.tag === scopedTag.tag && t.scope === scopedTag.scope
    )
  )
