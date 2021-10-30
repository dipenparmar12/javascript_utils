/**
 * @param {string} str
   @src https://saviomartin.com/20-killer-javascript-one-liners
 */
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
export default capitalize

// console.log(capitalize('foo')) // Foo
// console.log(capitalize('foo')) // Foo



/*

const capitalize = (str) =>
  str && str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

const format_str = (str) =>
  str && str.constructor.name === 'String'
    ? capitalize(str.toString().replace(/_/g, ' ').trim())
    : ''

export { capitalize, format_str }

*/