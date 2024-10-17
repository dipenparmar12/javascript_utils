/**
 * Removes empty strings from an object. If the object contains nested objects,
 * it will recursively clean them as well.
 *
 * @param {Object} obj - The object to be cleaned.
 * @returns {Object} The cleaned object with empty strings removed.
 *
 * @example
 * const myObject = {
 *   name: 'John',
 *   age: 30,
 *   address: {
 *     street: '',
 *     city: 'New York',
 *     zip: null,
 *   },
 *   hobbies: ['reading', '', 'coding'],
 * };
 *
 * const cleanedObject = removeEmptyStrings(myObject);
 * console.log(cleanedObject);
 * // Output: { name: "John", age: 30, address: { city: "New York" }, hobbies: ["reading", "coding"] }
 */
function removeEmptyStrings(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively clean nested objects
        removeEmptyStrings(obj[key])
      } else if (typeof obj[key] === 'string' && obj[key].trim() === '') {
        // Remove empty strings
        delete obj[key]
      }
    }
  }
  return obj
}

export default removeEmptyStrings
// // Example usage:
// const myObject = {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '',
//     city: 'New York',
//     zip: null,
//   },
//   hobbies: ['reading', '', 'coding'],
// }

// const cleanedObject = cleanObject(myObject)
// console.log(cleanedObject)
// Output: { name: "John", age: 30, address: { city: "New York" }, hobbies: ["reading", "coding"] }
