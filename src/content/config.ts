import { defineCollection } from "astro:content";
import { articleSchema, issueSchema, referenceSchema } from "./_schemas";

export const collections = {
  article: defineCollection({
    schema: articleSchema,
  }),
  issue: defineCollection({
    schema: issueSchema,
  }),
  reference: defineCollection({
    schema: referenceSchema,
  }),
};
