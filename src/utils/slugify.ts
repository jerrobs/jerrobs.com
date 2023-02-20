import { slug as slugger } from "github-slugger"
import type { ArticleFrontmatter, IssueFrontmatter } from "@content/_schemas"

export const slugifyStr = (str: string) => slugger(str)

const slugify = (item: ArticleFrontmatter | IssueFrontmatter) =>
  item.slug ? slugger(item.slug) : slugger(item.title)

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str))

export default slugify
