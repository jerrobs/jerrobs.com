import { z } from "astro:content"

const tags = z.array(z.string()).optional()

export const articleSchema = z
  .object({
    path: z.string().optional(),
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    version: z.string().optional(),
    issue: z.string().optional(),
    subtitle: z.string().optional(),
    sectionNumber: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),

    tags,

    references: z
      .object({
        tags: z.array(z.string()),
      })
      .optional(),

    description: z.string(),
  })
  .strict()

export type ArticleFrontmatter = z.infer<typeof articleSchema>

export const issueSchema = z
  .object({
    pubDatetime: z.date(),
    color: z.string(),
    version: z.string().optional(),
    coverImage: z.string(),
    coverImageCaption: z.string().optional(),
    coverImageAlt: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),

    draft: z.boolean().optional(),
    articles: z.array(z.string()),
    tags,

    bibliographyTopics: z
      .array(
        z.object({
          title: z.string(),
          tag: z.string(),
        })
      )
      .optional(),
    description: z.string(),
  })
  .strict()

export type IssueFrontmatter = z.infer<typeof issueSchema>

export const referenceSchema = z
  .object({
    tags,
    bibTex: z.string(),
    rendered: z.object({
      bibliography: z.string(),
      citation: z.string(),
    }),
    cslItem: z.object({
      type: z.enum([
        "article",
        "article-journal",
        "article-magazine",
        "article-newspaper",
        "bill",
        "book",
        "broadcast",
        "chapter",
        "classic",
        "collection",
        "dataset",
        "document",
        "entry",
        "entry-dictionary",
        "entry-encyclopedia",
        "event",
        "figure",
        "graphic",
        "hearing",
        "interview",
        "legal_case",
        "legislation",
        "manuscript",
        "map",
        "motion_picture",
        "musical_score",
        "pamphlet",
        "paper-conference",
        "patent",
        "performance",
        "periodical",
        "personal_communication",
        "post",
        "post-weblog",
        "regulation",
        "report",
        "review",
        "review-book",
        "software",
        "song",
        "speech",
        "standard",
        "thesis",
        "treaty",
        "webpage",
      ]),
      id: z.union([z.string(), z.number()]),
      "citation-key": z.string().optional(),
      categories: z.array(z.string()).optional(),
      language: z.string().optional(),
      journalAbbreviation: z.string().optional(),
      shortTitle: z.string().optional(),
      author: z.array(z.any()).optional(),
      chair: z.array(z.any()).optional(),
      "collection-editor": z.array(z.any()).optional(),
      compiler: z.array(z.any()).optional(),
      composer: z.array(z.any()).optional(),
      "container-author": z.array(z.any()).optional(),
      contributor: z.array(z.any()).optional(),
      curator: z.array(z.any()).optional(),
      director: z.array(z.any()).optional(),
      editor: z.array(z.any()).optional(),
      "editorial-director": z.array(z.any()).optional(),
      "executive-producer": z.array(z.any()).optional(),
      guest: z.array(z.any()).optional(),
      host: z.array(z.any()).optional(),
      interviewer: z.array(z.any()).optional(),
      illustrator: z.array(z.any()).optional(),
      narrator: z.array(z.any()).optional(),
      organizer: z.array(z.any()).optional(),
      "original-author": z.array(z.any()).optional(),
      performer: z.array(z.any()).optional(),
      producer: z.array(z.any()).optional(),
      recipient: z.array(z.any()).optional(),
      "reviewed-author": z.array(z.any()).optional(),
      "script-writer": z.array(z.any()).optional(),
      "series-creator": z.array(z.any()).optional(),
      translator: z.array(z.any()).optional(),
      accessed: z.any().optional(),
      "available-date": z.any().optional(),
      "event-date": z.any().optional(),
      issued: z.any().optional(),
      "original-date": z.any().optional(),
      submitted: z.any().optional(),
      abstract: z.string().optional(),
      annote: z.string().optional(),
      archive: z.string().optional(),
      archive_collection: z.string().optional(),
      archive_location: z.string().optional(),
      "archive-place": z.string().optional(),
      authority: z.string().optional(),
      "call-number": z.string().optional(),
      "chapter-number": z.union([z.string(), z.number()]).optional(),
      "citation-number": z.union([z.string(), z.number()]).optional(),
      "citation-label": z.string().optional(),
      "collection-number": z.union([z.string(), z.number()]).optional(),
      "collection-title": z.string().optional(),
      "container-title": z.string().optional(),
      "container-title-short": z.string().optional(),
      dimensions: z.string().optional(),
      division: z.string().optional(),
      DOI: z.string().optional(),
      edition: z.union([z.string(), z.number()]).optional(),
      event: z
        .string()
        .describe(
          "[Deprecated - use 'event-title' instead. Will be removed in 1.1]"
        )
        .optional(),
      "event-title": z.string().optional(),
      "event-place": z.string().optional(),
      "first-reference-note-number": z
        .union([z.string(), z.number()])
        .optional(),
      genre: z.string().optional(),
      ISBN: z.string().optional(),
      ISSN: z.string().optional(),
      issue: z.union([z.string(), z.number()]).optional(),
      jurisdiction: z.string().optional(),
      keyword: z.string().optional(),
      locator: z.union([z.string(), z.number()]).optional(),
      medium: z.string().optional(),
      note: z.string().optional(),
      number: z.union([z.string(), z.number()]).optional(),
      "number-of-pages": z.union([z.string(), z.number()]).optional(),
      "number-of-volumes": z.union([z.string(), z.number()]).optional(),
      "original-publisher": z.string().optional(),
      "original-publisher-place": z.string().optional(),
      "original-title": z.string().optional(),
      page: z.union([z.string(), z.number()]).optional(),
      "page-first": z.union([z.string(), z.number()]).optional(),
      part: z.union([z.string(), z.number()]).optional(),
      "part-title": z.string().optional(),
      PMCID: z.string().optional(),
      PMID: z.string().optional(),
      printing: z.union([z.string(), z.number()]).optional(),
      publisher: z.string().optional(),
      "publisher-place": z.string().optional(),
      references: z.string().optional(),
      "reviewed-genre": z.string().optional(),
      "reviewed-title": z.string().optional(),
      scale: z.string().optional(),
      section: z.string().optional(),
      source: z.string().optional(),
      status: z.string().optional(),
      supplement: z.union([z.string(), z.number()]).optional(),
      title: z.string().optional(),
      "title-short": z.string().optional(),
      URL: z.string().optional(),
      version: z.string().optional(),
      volume: z.union([z.string(), z.number()]).optional(),
      "volume-title": z.string().optional(),
      "volume-title-short": z.string().optional(),
      "year-suffix": z.string().optional(),
      custom: z
        .object({})
        .catchall(z.any())
        .describe(
          "Used to store additional information that does not have a designated CSL JSON field. The custom field is preferred over the note field for storing custom data, particularly for storing key-value pairs, as the note field is used for user annotations in annotated bibliography styles."
        )
        .optional(),
    }),
  })
  .strict()

export type ReferenceFrontmatter = z.infer<typeof referenceSchema>
