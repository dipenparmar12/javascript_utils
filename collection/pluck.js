/**
 * Extract values of a property from an array of objects
 * @param {*} objs
 * @param {*} property
 * @src https://1loc.dev/object/extract-values-of-a-property-from-an-array-of-objects/
 */
function pluck(objs, property) {
  return objs.map((obj) => obj[property])
}

export default pluck

/*
pluck(
  [
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
  ],
  'name'
)
// ['John', 'Smith', 'Peter']

*/
