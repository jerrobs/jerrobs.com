import { Cite } from '@citation-js/core'
import fg from 'fast-glob'
import { dump } from 'js-yaml'

import '@citation-js/plugin-bibtex'
import '@citation-js/plugin-csl'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

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
      scopedTags: cslItem.keyword
        ? cslItem.keyword
          .split(';')
          .map((keyword) => keyword.replace(/\\_/g, '_'))
          .flatMap(tagScoper)
        : [],
      rendered: {
        bibliography: processCitation(
          cite.format('bibliography', {
            format: 'html',
            template: 'harvard1',
            lang: 'en-US'
          })
        ), citation: processCitation(
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
      `---\n${dump(bibliographyEntry)}\n---\n`
    )
  })


  // context.bibliography = makeBibliography(
  //   createBibtex({
  //     tmpPath: context.tempPath,
  //     mdIt
  //   }) +
  //     combineBibtexFiles(
  //       fg.sync(path.join(context.sourceDir, '/**/*.bib'))
  //     ),
  //   options.keywords || []
  // )
}


generate({
  globPattern: 'jerrobs.**.json',
  tagScoper: (tag) => {

    if (!tag.startsWith('collection::'))
      return [{ tag: tag, scope: undefined }]

    const split = tag.replace(/^collection::/, '').split('::')
    return split.map((collection) => ({
      tag: collection,
      scope: 'issue'
    }))
  }
})



