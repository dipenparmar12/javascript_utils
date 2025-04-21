/**
 * Removes specific properties from an object.
 *
 * @param {Object} obj - The object to modify.
 * @param {string} [propsToRemove=''] - Comma-separated property names to remove from the object.
 * @returns {Object} The same object, with specified properties removed.
 *
 * @example
 * const user = { name: 'John', age: 30, email: 'john@example.com' };
 * removeKeysFromObject(user, 'age,email');
 * // Result: { name: 'John' }
 *
 * @example
 * const config = { debug: true, version: '1.0.0', env: 'production' };
 * removeKeysFromObject(config, 'debug');
 * // Result: { version: '1.0.0', env: 'production' }
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * removeKeysFromObject(obj);
 * // Result: { a: 1, b: 2, c: 3 } (no changes)
 */
function purgeObjProps(obj, propsToRemove = '') {
  const propsArray = propsToRemove.split(',').map((prop) => prop.trim())
  propsArray.forEach((prop) => {
    if (obj && obj.hasOwnProperty(prop)) {
      delete obj[prop]
    }
  })
  return obj
}
