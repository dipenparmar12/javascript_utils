/**
 * Transforms the keys of an object based on a provided key mapping.
 *
 * @param {Object} obj - The input object whose keys need to be transformed.
 * @param {Object} keyMapping - An object representing the mapping of original keys to new keys.
 * @param {boolean} [reverse=false] - If true, reverses the key mapping.
 * @returns {Object} A new object with keys transformed according to the key mapping.
 * @example
 * const inputObject = {
 *  one: 1,
 *  two: 22,
 *  unknown_key
 * };
 * const keyMapping = {
 *  one: 'One-One',
 *  two: 'Two-Two',
 *  // ... other mappings ...
 * };
 * const transformedObject = transformKeys(inputObject, keyMapping);
 * console.log(transformedObject);
 * // Output:
 * // {
 * //   "One-One": 1,
 * //   "Two-Two": 22,
 * //   "unknown_key": "value"
 * // }
 * const reversedObject = transformKeys(transformedObject, keyMapping, true);
 * console.log(reversedObject);
 * // Output:
 * // {
 * //   "one": 1,
 * //   "two": 22,
 * //   "unknown_key": "value"
 * // };
 */
function transformKeys(obj, keyMapping, reverse = false) {
  const result = {}
  const finalMapping = reverse
    ? Object.fromEntries(Object.entries(keyMapping).map(([k, v]) => [v, k]))
    : keyMapping

  for (const [key, value] of Object.entries(obj)) {
    const newKey = finalMapping[key] || key
    result[newKey] = value
  }

  return result
}

export default transformKeys

// Example usage:
/*
const inputObject = {
  one: 1,
  two: 22,
  unknown_key: 'value'
};

const keyMapping = {
  one: 'One-One',
  two: 'Two-Two',
  // ... other mappings ...
};

const transformedObject = transformKeys(inputObject, keyMapping);
console.log(transformedObject);
// Output:
// {
//   "One-One": 1,
//   "Two-Two": 22,
//   "unknown_key": "value"
// }

const reversedObject = transformKeys(transformedObject, keyMapping, true);
console.log(reversedObject);
// Output:
// {
//   "one": 1,
//   "two": 22,
//   "unknown_key": "value"
// }
*/
