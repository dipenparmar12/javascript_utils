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


/**
 * @param {{}} obj
 * @param {string} deleteKey
 * @src https://stackoverflow.com/a/56030135/8592918
 */
export const removeProperty = ({ [propKey]: propValue, ...rest },propKey) =>
  rest

/**
 * @param {{}} obj
 * @param {string} deleteKey
 * @src https://stackoverflow.com/a/56030135/8592918
 */
export const removeProperties = (object, ...keys) =>
  keys.length
    ? removeProperties(object, removeProperty(keys.pop()), ...keys)
    : object