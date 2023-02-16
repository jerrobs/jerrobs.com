import type { CollectionEntry } from "astro:content";

const getSortedReferences = (articles: CollectionEntry<"reference">[]) =>
  articles
    .filter(({ data }) => !data.draft)
    .sort((a, b) =>
      a.data.cslItem.id.toString().localeCompare(b.data.cslItem.id.toString())
    );

export default getSortedReferences;
