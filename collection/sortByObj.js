/**
 * Reorders the items in an array of collection based on a specified order object.
 * or sort items based on a specified order
 *
 * @param {Array} collection - An array of arrays, where each inner array contains an item and an associated array.
 * @param {Object} order - An object specifying the desired order of the items. Keys should match the items in the `collection` array, and values should be numerical, representing the desired sort order.
 * @return {Array} - The reordered `collection` array.
 */
function sortByObj(collection, order) {
  return collection.sort((a, b) => {
    const itemA = a[0];
    const itemB = b[0];
    return order[itemA] - order[itemB];
  });
}

export default sortByObj

/*

 // Example
const groups = [
  ['item2', []],
  ['item1', []],
  ['item3', []],
  ['item4', []],
];

const order = {
  item1: 4,
  item2: 3,
  item3: 2,
  item4: 1,
};

const orderedGroups = sortByObj(groups, order);
console.log(orderedGroups);
// Output:
// [
//   [item4, []],
//   [item3, []],
//   [item2, []],
//   [item1, []]
// ]

*/


/*
function sortBy(arr, sortings){
  let res = []
  s = Object.entries(sortings)
  sortedArr = s.sort((a,b) => b[1] - a[1] ) // ['itemName', 'orderKey']

  sortedArr.forEach(([key,orderKey]) => {
    console.log(key)
    arr.forEach(([itemName, data]) => {
      if(key === itemName) {
        res.push([itemName, data, orderKey ])
      }
    })
  })

  return res
}
*/


