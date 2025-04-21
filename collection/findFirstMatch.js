/**
 * Find the first object in the array where the given key matches the given value.
 *
 * @param {Object[]} arrOfObj - Array of objects to search.
 * @param {string} key - Key to match.
 * @param {*} value - Value to match.
 * @returns {Object|undefined} - First matching object or undefined if not found.
 *
 * @example
 * const users = [
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" },
 * ];
 *
 * findFirstMatch(users, 'name', 'Bob');
 * // → { id: 2, name: "Bob" }
 *
 * findFirstMatch(users, 'id', 3);
 * // → undefined
 */
function findFirstMatch(arrOfObj, key, value) {
  return arrOfObj?.find((obj) => obj[key] === value)
}

export default findFirstMatch
