import {
  defineConfig
} from "astro/config"
// import remarkToc from "remark-toc"
import sectionize from "remark-sectionize"
// import remarkCollapse from "remark-collapse"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import compress from "astro-compress"
import {
  markdownedFrontmatterPlugin
} from "./src/utils/markdown/remark-markdowned-frontmatter"
import AstroPWA from "@vite-pwa/astro"
import rehypeRewrite from "rehype-rewrite"
import spaceCommand from "./src/utils/space-commander.ts"
import rehypeAddClasses from "rehype-add-classes"
import image from "@astrojs/image"
import {
  resolve,
  dirname
} from "node:path"
import {
  fileURLToPath
} from "url"
import rehypeCitation from 'rehype-citation'
const __filename = fileURLToPath(
  import.meta.url)
const __dirname = dirname(__filename)
import m2dx from 'astro-m2dx';

// https://astro.build/config
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
   
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [resolve(__dirname, "src/styles/mixins/index.styl")],
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
  },
  output: "static",
  site: "https://www.jerrobs.com/",
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),

    sitemap(),
    compress(),
    AstroPWA({
      manifest: {
        $schema: "https://json.schemastore.org/web-manifest-combined.json",
        name: "Journal of Erratic Obervations",
        short_name: "J.Err.Obs.",
        theme_color: "#ffffff",
        icons: [{
            src: "/assets/icons/manifest-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icons/manifest-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
    }), ,
    vue(),
  ],
  markdown: {
    remarkPlugins: [m2dx, markdownedFrontmatterPlugin, sectionize, rehypeCitation],
    rehypePlugins: [
      [rehypeCitation, {
        bibliography: 'jerrobs.strategy.json',
        linkCitations: true,
      }],
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