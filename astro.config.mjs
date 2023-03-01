import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import remarkToc from "remark-toc"
import sectionize from "remark-sectionize"
import remarkCollapse from "remark-collapse"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { markdownedFrontmatterPlugin } from "./src/utils/markdown/remark-markdowned-frontmatter"
import AstroPWA from '@vite-pwa/astro'
import addClasses from 'rehype-add-classes';
import { rehypeAddClasses } from './src/utils/markdown/rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: "https://www.jerrobs.com/",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    compress(),
    AstroPWA()
  ],
  markdown: {
    remarkPlugins: [
      markdownedFrontmatterPlugin,
      sectionize,
      // remarkToc,
      // [
      //   remarkCollapse,
      //   {
      //     test: "Table of contents",
      //   },
      // ],
    ],
    rehypePlugins: [
      rehypeAddClasses({
        'p': 'md'
      })],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
})
