/**
 * Sorts a collection of objects by the value of a given key.
 * @src https://1loc.dev/array/sort-an-array-of-items-by-given-key/
 * @param {Array} collection - The collection to sort.
 * @param {string} key - The key to use for sorting.
 * @param {string} [order='asc'] - The order of sorting. Can be 'asc' or 'desc'.
 * @returns {Array} - The sorted collection.
 * @example
 * const people = [
 *   { name: 'John', age: 32 },
 *   { name: 'Jane', age: 25 },
 *   { name: 'Bob', age: 48 },
 *   { name: 'Mary', age: 18 }
 * ];
 * const sortedPeople = sortBy(people, 'age', 'desc');
 * console.log(sortedPeople); // [{ name: 'Bob', age: 48 }, { name: 'John', age: 32 }, { name: 'Jane', age: 25 }, { name: 'Mary', age: 18 }]
 */
function sortBy(collection, key, order = 'asc') {
  if (!Array.isArray(collection)) {
    throw new Error('collection should be arrays');
  }
  
  return collection.sort((a, b) => {
    if (order.toLowerCase() === 'asc') {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
    } else {
      return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    }
  })
}

export default sortBy


/**
 * Sorts an array of objects based on the order specified in an object.
 * @param {Object[]} items - The array of objects to be sorted.
 * @param {Object} orderObj - The object that specifies the order of the items.
 * @param {Object} [options={}] - An optional object that can be used to customize the behavior of the function.
 * @param {string} [options.sourceKey='id'] - The name of the property to be used as the key for sorting the items.
 * @param {string} [options.orderType='asc'] - The order in which to sort the items. Valid values are 'asc' (ascending) and 'desc' (descending).
 * @returns {Object[]} The sorted array of objects.
 *  @example
 *  let users = [
 *    { id: 'john', },
 *    { id: 'mike', },
 *    { id: 'dipen', },
 *    { id: 'phil', },
 *  ];
 *
 *  let orderObj = {
 *    phil:1,
 *    dipen:4,
 *    john:3,
 *    mike:2,
 *  };
 *  const usersOrdered = sortBY(users, orderObj, { sourceKey: 'id' });
 *  console.log(usersOrdered); // [{id:'phil'},{id:'dipen'},{id:'john'},{id:'mike'},]
 *
 * @throws {TypeError} If the first parameter is not an array.
 * @throws {TypeError} If the second parameter is not an object.
 * @throws {TypeError} If the third parameter is not an object.
 * @throws {TypeError} If the sourceKey option is not a string.
 */
export function sortByV2(items, orderObj, options = {}) {
  if (!Array.isArray(items)) {
    throw new TypeError('The first parameter must be an array.');
  }
  if (typeof orderObj !== 'object') {
    throw new TypeError('The second parameter must be an object.');
  }
  if (typeof options !== 'object') {
    throw new TypeError('The third parameter must be an object.');
  }
  const {sourceKey = 'id', orderType = 'asc'} = options;
  if (typeof sourceKey !== 'string') {
    throw new TypeError('The sourceKey option must be a string.');
  }
  if (orderType.toLowerCase() !== 'asc' && orderType.toLowerCase() !== 'desc') {
    throw new TypeError("The orderType option must be 'asc' or 'desc'.");
  }
  const sortFn = orderType.toLowerCase() === 'desc'
      ? (a, b) => orderObj[b[sourceKey]] - orderObj[a[sourceKey]]
      : (a, b) => orderObj[a[sourceKey]] - orderObj[b[sourceKey]];
  return items.sort(sortFn);
}

/*
const people = [
    { name: 'Foo', age: 42 },
    { name: 'Bar', age: 24 },
    { name: 'Fuzz', age: 36 },
    { name: 'Baz', age: 32 },
];
// Accessending
sortBy(people, 'age');

// [
//   { name: 'Bar', age: 24 },
//   { name: 'Baz', age: 32 },
//   { name: 'Fuzz', age: 36 },
//   { name: 'Foo', age: 42 },
// ]

// Descending
sortBy(people, 'age', false);
  // 0:{name: 'Foo', age: 42}
  // 1:{name: 'Fuzz', age: 36}
  // 2:{name: 'Baz', age: 32}
  // 3:{name: 'Bar', age: 24}

*/

// function sortBy(arr, k) {
//   return arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0))
// }
