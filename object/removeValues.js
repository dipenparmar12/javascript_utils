/**
 *
 * @param {*} obj
 * @param {*} values
 * @returns {*} obj
 */
function removeValues(obj, values, recursive) {
  let newObj = {}
  Array.isArray(values) || (values = [values])
  Object.keys(obj).forEach((prop) => {
    if (!values.includes(obj[prop])) {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}

export default removeValues
