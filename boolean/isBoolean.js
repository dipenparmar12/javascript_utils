/**
 * Check if a value is a boolean.
 * @param {*} value
 * @returns {boolean}
 */
export default function isBoolean(value) {
  return typeof value === 'boolean' || /^(true|false|0|1)$/i.test(value)
}

// const boolValue1 = true
// const boolValue2 = false
// const boolValue3 = 1
// const boolValue4 = 0
// const nonBoolValue = 'hello'

// console.log(isBoolean(boolValue1)) // Output: true
// console.log(isBoolean(boolValue2)) // Output: true
// console.log(isBoolean(boolValue3)) // Output: true
// console.log(isBoolean(boolValue4)) // Output: true
// console.log(isBoolean(nonBoolValue)) // Output: false
