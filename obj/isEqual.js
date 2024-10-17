/**
 * Recursively check the equality of properties of the two objects being compared.
 * @param {Object} object - The first object to be compared
 * @param {Object} other - The second object to be compared
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
/**
 * Recursively check the equality of properties of the two objects being compared.
 * @param {*} obj1
 * @param {*} obj2
 * @param {boolean} [considerEmptyAsEqual=false] - Optional parameter to consider undefined, null, and empty string as equal
 * @returns {boolean} - Returns true if all properties of the two objects are equal, otherwise returns false
 * @example (isEqualV2({ a: 1, b: 2 }, { a: 1, b: 2 })) // true
 * @example (isEqualV2({ a: 1, b: 2 }, { b: 2, a: 1 })) // true
 * @example (isEqualV2({ a: [1, 2, 3] }, { a: [1, 2, 3] })) // true
 * @example (isEqualV2({ a: [1, 2, 3] }, { a: [1, 2, 4] })) // false
 * @example (isEqualV2({ a: 1, b: 2 }, { a: 1 })) // false
 * @example (isEqualV2({ a: 1, b: 2 }, { a: 1, b: '2' })) // false
 * @example (isEqualV2(null, undefined, true)) // true
 * @example (isEqualV2(null, '', true)) // true
 * @example (isEqualV2(undefined, '', true)) // true
 */
export function isEqualV2(obj1, obj2, considerEmptyAsEqual = false) {
  // Check if both are strictly equal
  if (obj1 === obj2) return true

  // Consider undefined, null, and empty string as equal if the flag is set
  if (
    considerEmptyAsEqual &&
    (obj1 == null || obj1 === '') &&
    (obj2 == null || obj2 === '')
  )
    return true

  // Check if both are of the same type
  if (typeof obj1 !== typeof obj2) return false

  // Handle arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqualV2(obj1[i], obj2[i], considerEmptyAsEqual)) return false
    }
    return true
  }

  // Handle objects
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) return false
    for (let key of keys1) {
      if (!isEqualV2(obj1[key], obj2[key], considerEmptyAsEqual)) return false
    }
    return true
  }

  // Handle other data types (boolean, string, number)
  return obj1 === obj2
}
