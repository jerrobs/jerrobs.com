import { toString } from "mdast-util-to-string"
import { visit } from "unist-util-visit"

export function remarkTitle() {
  return function (tree, { data }) {
    // console.log({ data })

    data.astro.frontmatter.title = "xxxxxxxx"

    visit(tree, node => {
      if (node.depth === 1) {
        console.log(data.astro.frontmatter)
        data.astro.frontmatter.title = toString(node.children)
      }
    })
  }
}
