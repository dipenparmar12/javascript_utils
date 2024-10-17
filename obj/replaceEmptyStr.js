function replaceEmptyStr(obj, replace = null) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively clean nested objects
        replaceEmptyStr(obj[key])
      } else if (typeof obj[key] === 'string' && obj[key].trim() === '') {
        obj[key] = replace
      }
    }
  }
  return obj
}

export default replaceEmptyStr
