/**
 * Determines whether two objects are deeply equal.
 * Recursively check the equality of properties of the two objects being compared.
 * @param {Object} object - The first object to compare.
 * @param {Object} other - The second object to compare.
 * @returns {boolean} - Returns true if all properties of the two objects are equal, otherwise returns false
 * @example (isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })) // true
 * @example (isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })) // true
 * @example (isEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] })) // true
 * @example (isEqual({ a: [1, 2, 3] }, { a: [1, 2, 4] })) // false
 * @example (isEqual({ a: 1, b: 2 }, { a: 1 })) // false
 * @example (isEqual({ a: 1, b: 2 }, { a: 1, b: '2' })) // false
 * @example (isEqual({ a: 1, b: 2 }, { c: 1, d: 2 })) // false
 * @example (isEqual(null, undefined)) // false
 * @example (isEqual(5, 5)) // true
 * @example (isEqual({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 2, 3]}}})) // true
 * @example (isEqual({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 2, 4]}}})) // false
 *
 */
function isEqual(object, other) {
  if (object === other) return true
  if (
    object == null ||
    other == null ||
    typeof object !== 'object' ||
    typeof other !== 'object'
  )
    return object === other

  const keys1 = Object.keys(object)
  const keys2 = Object.keys(other)

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!other.hasOwnProperty(key) || !isEqual(object[key], other[key]))
      return false
  }

  return true
}

export default isEqual

// console.log(isEqual({a: 1, b: 2}, {a: 1, b: 2})) // true
// console.log(isEqual({a: 1, b: 2}, {b: 2, a: 1})) // true
// console.log(isEqual({a: [1, 2, 3]}, {a: [1, 2, 3]})) // true
// console.log(isEqual({a: [1, 2, 3]}, {a: [1, 2, 4]})) // false
// console.log(isEqual({a: 1, b: 2}, {a: 1})) // false
// console.log(isEqual({a: 1, b: 2}, {a: 1, b: '2'})) // false
// console.log(isEqual({a: 1, b: 2}, {c: 1, d: 2})) // false
// console.log(isEqual(null, undefined)) // false
// console.log(isEqual(5, 5)) // true
// console.log(isEqual({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 2, 3]}}})) // true
// console.log(isEqual({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 2, 4]}}})) // false


/*

// Optimized by AI

function isEqual(object, other) {
  if (object === other) return true
  if (
    object == null ||
    other == null ||
    typeof object !== 'object' ||
    typeof other !== 'object'
  )
    return object === other

  const keys1 = new Set(Object.keys(object))
  const keys2 = new Set(Object.keys(other))

  if (keys1.size !== keys2.size) return false

  for (const key of keys1) {
    if (!keys2.has(key) || !isEqual(object[key], other[key]))
      return false
  }

  return true
}

export default isEqual
*/