import { selectAll } from "hast-util-select"




export function rehypeAddClasses(additions) {

  const adders = Object.entries(additions).map(adder)
  // console.log(adders);
  return tree => {
    console.log(tree);
    adders.forEach(a => a(tree))
  }
}

const adder = ([selector, className]) => {
  const writer = write(className)
  return node => selectAll(selector, node).forEach(writer)
}

const write =
  className =>
    ({ properties }) => {
      console.log("XXX")
      if (!properties.className) properties.className = className
      else properties.className += ` ${className}`
    }
