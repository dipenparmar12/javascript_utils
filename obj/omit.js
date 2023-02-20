/**
 * Deletes one or multiple keys from an object and returns a new object with the remaining keys.
 *
 * @param {Object} obj - The object to remove keys from.
 * @param {string|string[]} deleteKeys - The key or an array of keys to delete.
 * @param {string[]} [args] - Additional keys to delete.
 * @returns {Object} The new object with the remaining keys.
 *
 * @example
 * const testObj = {
 *   id: 'id',
 *   name: 'name',
 *   one: 1,
 *   two: 22,
 *   three: 333,
 *   fourFive: 456,
 *   number: 1234567890,
 * };
 *
 * omit(testObj, 'id');
 * // Output: { name: 'name', one: 1, two: 22, three: 333, fourFive: 456, number: 1234567890 }
 *
 * omit(testObj, 'name');
 * // Output: { id: 'id', one: 1, two: 22, three: 333, fourFive: 456, number: 1234567890 }
 *
 * omit(testObj, ['id', 'name']);
 * // Output: { one: 1, two: 22, three: 333, fourFive: 456, number: 1234567890 }
 *
 * omit(testObj, ['number', 'id', 'name', 'one', 'two', 'three']);
 * // Output: { fourFive: 456 }
 */
function omit(obj = {}, deleteKeys, ...args) {
  Array.isArray(deleteKeys) || (deleteKeys = [deleteKeys])
  if (args) deleteKeys.splice(deleteKeys.length, 0, ...args)

  return (
    Object.keys(obj).reduce((object, key) => {
      // if (key !== deleteKey) {
      //   object[key] = obj[key]
      // }
      if (!deleteKeys.includes(key)) {
        object[key] = obj[key]
      }
      return object
    }, {}) || {}
  )
}

export default omit

// const testObj = {
//   id: 'id',
//   name: 'name',
//   one: 1,
//   two: 22,
//   three: 333,
//   fourFive: 456,
//   number: 1234567890,
// }
// omit(testObj, 'id')
// omit(testObj, 'name')
// omit(testObj, ['id', 'name'])
// omit(testObj, ['number','id', 'name', 'one', 'two','three'])
