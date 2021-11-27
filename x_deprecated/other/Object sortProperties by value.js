/**
 * sort Object by it array of properties
 * @param {Object} obj
 * @param {Boolean} asc
 * @return {Array} 
 * Src: https://gist.github.com/umidjons/9614157
 */
const sortProperties = (obj, asc = true) => {
  // convert object into array
  let sortable = []
  // each item is an array in format [key, value]
  for (let key in obj) if (obj.hasOwnProperty(key)) sortable.push([key, obj[key]])

  // sort items by value
  return sortable.sort((a, b) =>
    asc ? a[1].length - b[1].length : b[1].length - a[1].length,
  ) // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}

// let input = {
//   e: [1, 2],
//   d: [12, 3, 4],
//   c: [1],
//   b: [1, 2, 3, 4, 5],
//   a: [],
// }
// const output = [ ['a', Array][('c', Array][('e', Array][('d', Array][('b', Array] ]
