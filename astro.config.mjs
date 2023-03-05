import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import remarkToc from "remark-toc"
import sectionize from "remark-sectionize"
import remarkCollapse from "remark-collapse"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { markdownedFrontmatterPlugin } from "./src/utils/markdown/remark-markdowned-frontmatter"
import AstroPWA from "@vite-pwa/astro"
import rehypeRewrite from "rehype-rewrite"
import spaceCommand from "./src/utils/space-commander.ts"
import rehypeAddClasses from "rehype-add-classes"

// https://astro.build/config
export default defineConfig({
  site: "https://www.jerrobs.com/",
  integrations: [react(), sitemap(), compress(), AstroPWA()],
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
    rehypePlugins: [
      [
        rehypeAddClasses,
        {
          "img,figure,table,section,h1,h2,h3,h4,p,ol,ul,li,blockquote": "md",
        },
      ],

      [
        rehypeRewrite,
        {
          rewrite: function (node) {
            if (node.type == "text") {
              node.value = spaceCommand(node.value)
            }
          },
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
