/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path <user.name | user.car.color>
 * @param fallback
 * @param index
 */
export default function get(obj, path, fallback, index) {
  const key = typeof path === 'string' ? path.split('.') : [path]

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break
    obj = obj[key[index]]
  }

  return obj === undefined ? fallback : obj
}
