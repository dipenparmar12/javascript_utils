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
  return collection.sort((a, b) => {
    if (order.toLowerCase() === 'asc') {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
    } else {
      return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    }
  })
}

export default sortBy

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
