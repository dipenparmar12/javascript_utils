/**
 * @param {{}} obj
 * @param {string} deleteKey
 */
function omitProp(obj = {}, deleteKey) {
  return (
    Object.keys(obj).reduce((object, key) => {
      if (key !== deleteKey) {
        object[key] = obj[key]
      }
      return object
    }, {}) || {}
  )
}

export default omitProp
