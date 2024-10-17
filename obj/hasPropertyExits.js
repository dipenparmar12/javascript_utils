/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * Check If an Object Has a Property (if array of props given then condition apply for every )
 * @param {Object} obj The object to query.
 * @param {String|Array} props
 * @returns {Boolean}
 * @src https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/hasIn.js#L20
 * @example
 * obj = { a:1, b:2, c:3 }
 * isPropertyExits(obj, 'q') // false
 * isPropertyExits(obj, 'b') // true
 * isPropertyExits(obj, ['a','b']) // true
 * isPropertyExits(obj, ['a','b','d']) // false
 */
function isPropertyExits(obj, props) {
  if (obj == null || props === undefined) return false
  Array.isArray(props) || (props = [props])
  return props.every((prop) => prop in Object(obj))
}

export default isPropertyExits
