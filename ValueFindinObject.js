/**
 * 
 * @param {*} input <Array || Object>
 * @param {*} searchKey 
 * @returns 
 * @Src: https://stackoverflow.com/a/58986651/8592918
 */
const findIn = (input, searchKey) => {
  const arr =
    Object.prototype.toString.call(input) === '[object Array]' ? input : [input]

  return arr.filter((obj) =>
    Object.keys(obj).some((key) => {
      if (typeof obj[key] === 'string') {
        return obj[key]?.toLowerCase?.().includes(searchKey?.toLowerCase?.())
      }
      if (typeof obj[key] === 'number') {
        return `${obj[key]}`
          ?.toLowerCase?.()
          .includes(searchKey?.toLowerCase?.())
      }
    }),
  )
}

// js search within object vlaues
// JS search in object values