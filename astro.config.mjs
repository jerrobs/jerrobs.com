import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import remarkToc from "remark-toc"
import sectionize from "remark-sectionize"
import remarkCollapse from "remark-collapse"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { markdownedFrontmatterPlugin } from "./src/utils/markdown/remark-markdowned-frontmatter"

// https://astro.build/config
export default defineConfig({
  site: "https://astro-paper.pages.dev/",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    compress(),
  ],
  markdown: {
    remarkPlugins: [
      markdownedFrontmatterPlugin,
      sectionize,
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
})
