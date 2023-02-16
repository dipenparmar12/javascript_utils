/**
 * Convert a comma-separated string to an integer for a collection of objects.
 * @param {Array} collection - The collection of objects to convert.
 * @param {string} key - The key of the property to convert.
 * @param {string} [separator=','] - The separator used in the string.
 * @returns {Array} - The collection of objects with the property converted to integer.
 * @throws {TypeError} - Throws an error if the collection or key parameters are not provided or if the separator parameter is not a string.
 * @example
 * const data = [
 *   {id: 1, values: '1,14,164'},
 *   {id: 2, values: '2,27,281'}
 * ];
 * const resultConverted = toInt(data, 'values', ',');
 * console.log(resultConverted); // [{id: 1, values: 114164}, {id: 2, values: 227281}]
 */
function toInt(collection, key, separator = ',') {
  if (!collection || !Array.isArray(collection)) {
    throw new TypeError('The collection parameter must be an array of objects.');
  }

  if (typeof key !== 'string') {
    throw new TypeError('The key parameter must be a string.');
  }

  if (typeof separator !== 'string') {
    throw new TypeError('The separator parameter must be a string.');
  }

  return collection.map(item => {
    if (!item[key]) return item
    const values = item[key].split(separator).map(val => parseInt(val.trim(), 10));
    return {...item, [key]: parseInt(values.join(''), 10)};
  });
}

export default toInt


/*
const data = [
  {id: 1, values: '1,14,164'},
  {id: 2, values: '2,27,281'}
];

const resultConverted = toInt(data, 'values', ',');
console.log(resultConverted);
*/
