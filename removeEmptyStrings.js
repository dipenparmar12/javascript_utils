/**
 *
 * @param {*} obj
 * @returns {*} obj
 */
function removeEmptyStrings(obj) {
  let newObj = {}
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== '') {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}

export default removeEmptyStrings
