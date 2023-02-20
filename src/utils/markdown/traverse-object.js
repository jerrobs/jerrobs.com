const RegExpCache = {}

/**
 */
export function traverse(obj, callback, propertiesStrOrRegEx) {
  let r

  propertiesStrOrRegEx = propertiesStrOrRegEx || []
  propertiesStrOrRegEx = Array.isArray(propertiesStrOrRegEx)
    ? propertiesStrOrRegEx
    : [propertiesStrOrRegEx]

  const propertiesRegExes = propertiesStrOrRegEx.map(p => {
    if (RegExpCache[p]) return RegExpCache[p]

    return (RegExpCache[p] =
      typeof p === "string" ? new RegExp(`^${p.replace("*", ".*")}$`) : p)
  })

  return iterate(obj, [])

  function pathMatch(pathArr) {
    if (!propertiesRegExes.length) return true

    const pathStr = pathArr.join(".")

    return !!propertiesRegExes.find(p => {
      p.lastIndex = 0 // https://stackoverflow.com/questions/11477415/why-does-javascripts-regex-exec-not-always-return-the-same-value
      return p.test(pathStr)
    })
  }

  function iterate(object, path) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const chainedPath = [...path, key]

        if (pathMatch(chainedPath)) {
          r = callback(object, chainedPath, object[key])

          if (r === true) return true
        }

        if (typeof object[key] === "object") {
          r = iterate(object[key], chainedPath)

          if (r === true) return true
        }
      }
    }

    return false
  }
}
