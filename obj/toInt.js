/**
 * Convert a comma-separated string to an integer for an object.
 * @param {Object} obj - The object to convert.
 * @param {string} key - The key of the property to convert.
 * @param {Object} options - The key of the property to convert.
 * @param {string} [options.separator=','] - The separator used in the string.
 * @param {string} [options.modifiedKey=null] - new prop for integer data
 * @returns {Object} - The object with the property converted to integer.
 * @throws {TypeError} - Throws an error if the obj or key parameters are not provided or if the separator parameter is not a string.
 * @example
 * const obj = { id: 1, values: '1,14,164' };
 * const resultConverted = toInt(obj, 'values', ',');
 * console.log(resultConverted); // { id: 1, values: 114164 }
 */
function toInt(obj, key, options = {}) {
  const { separator = ',', modifiedKey = null } = options || {}

  if (!obj || typeof obj !== 'object') {
    throw new TypeError('The obj parameter must be an object.')
  }

  if (typeof key !== 'string') {
    throw new TypeError('The key parameter must be a string.')
  }

  if (typeof separator !== 'string') {
    throw new TypeError('The separator parameter must be a string.')
  }

  if (!obj[key]) {
    return obj
  }

  const values = obj[key]
    .split(separator)
    .map((val) => parseInt(val.trim(), 10))

  return { ...obj, [modifiedKey || key]: parseInt(values.join(''), 10) }
}

export default toInt

/*
const obj = { id: 1, values: '1,14,164' };
const resultConverted = toInt(obj, 'values', ',');
console.log(resultConverted);
*/
