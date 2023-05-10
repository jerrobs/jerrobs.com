export const getPageNumbers = (
  numberOfEntries: number,
  entriesPerPage: number
) => {
  const numberOfPages = Math.ceil(numberOfEntries / entriesPerPage)

  let pageNumbers: number[] = []
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers = [...pageNumbers, i]
  }

  return pageNumbers
}
