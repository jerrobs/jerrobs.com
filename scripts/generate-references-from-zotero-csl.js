import { Cite } from '@citation-js/core'
import fg from 'fast-glob'
import { dump } from 'js-yaml'

import '@citation-js/plugin-bibtex'
import '@citation-js/plugin-csl'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'


const URL_REGEXP = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*))/

const linkify = (str) => str.replace(URL_REGEXP, "<a href='$1'>$1</a>")

const readCSLItems = (fileNames) =>
  fileNames.flatMap(
    (fileName) => JSON.parse(readFileSync(fileName).toString())
  )

const generate = ({ globPattern, tagScoper }) => {
  const clsItems = readCSLItems(
    fg.sync(globPattern)
  )

  const cite = Cite()

  const processCitation = (s = '') => s.replace('(', '').replace(')', '')

  let bibliography = clsItems.flatMap((cslItem) => {

    cite.set(cslItem)
    return {
      cslItem,
      tags: cslItem.keyword
        ? cslItem.keyword
          .split(';')
          .flatMap(tagScoper)
        : [],
      rendered: {
        bibliography: linkify(processCitation(
          cite.format('bibliography', {
            format: 'html',
            template: 'harvard1',
            lang: 'en-US'
          })
        )), citation: processCitation(
          cite.format('citation', {
            format: 'html',
            template: 'harvard1',
            lang: 'en-US'
          })
        )
      },
      bibTex: cite.format('bibtex')
    }
  })


  bibliography.forEach((bibliographyEntry) => {

    writeFileSync(
      join(
        'src',
        'content',
        'reference',
        `${bibliographyEntry.cslItem.id}.md`
      ),
      `---\n${dump(bibliographyEntry, { quotingType: '"' })}---\n`
    )
  })
}


generate({
  globPattern: 'jerrobs.**.json',
  tagScoper: (tag) => {

    if (!tag.startsWith('collection::'))
      // return [{ tag: tag, scope: undefined }]
      return [tag]

    const split = tag.replace(/^collection::/, '').split('::')

    const issue = split.shift()

    const tags = ["issue:" + issue]
    tags.push(...split.map((collection) => ("topic:" + issue + "/" + collection)))

    return tags
  }
})



