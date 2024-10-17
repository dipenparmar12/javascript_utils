/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 */
function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.toLowerCase().slice(1) : str
}

export default capitalize
