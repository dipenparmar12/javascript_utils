const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep Merge JavaScript Objects Merging Recursively
 * @param {Object} target
 * @param  {...Object} sources
 * @returns {Object}
 * @see https://thewebdev.info/2021/03/06/how-to-deep-merge-javascript-objects/
 * @example
 * let merged = mergeRecursive(
 *     {
 *       a: 11,
 *       b: {bb: 11},
 *       c: 11,
 *     },
 *     {b: {bbb: 222}, c: 222}
 * )
 * console.log(merged)
 * merged = {
 *   a: 11,
 *   b: {bb: 11,bbb: 222 },
 *   c: 222
 * }
 */
function mergeRecursive(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          })
        mergeRecursive(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key],
        })
      }
    }
  }

  return mergeRecursive(target, ...sources)
}

export default mergeRecursive

/*
let merged2 = mergeRecursive(
  {
    a: 1,
    b: { bb: 11 },
    c: 1,
    d: {
      d: {
        d2: 123,
      },
    },
  },
  { d: { d: { d3: 333 } } }
)
console.log(merged2)
*/

/**
 * Recursively merges the properties of two objects or arrays. If the same key is present in both objects, the value from
 * the target object will overwrite the value from the source object.
 *
 * @param {Object|Array} source - The source object or array to merge.
 * @param {Object|Array} target - The target object or array to merge with.
 * @returns {Object|Array} - The merged object or array.
 * @example
 *
 * const source = {a: [1, 2, 3], b: 111, d: 111};
 * const target = {a: [3, 4, 5], b: 222, c: 333};
 *
 * const merged = mergeRecursiveV2(source, target);
 * //  {a: [1, 2, 3, 3, 4, 5], b: 222, c: 333, d: 111}
 *
 * const mergedArray = mergeRecursiveV2([1, 2, 3], [2, 3, 4]);
 * // [1, 2, 3, 2, 3, 4]
 */
export function mergeRecursiveV2(source, target) {
  if (Array.isArray(source) && Array.isArray(target)) {
    return [...source, ...target]
  } else if (isObject(source) && isObject(target)) {
    let result = { ...source }
    for (let key in target) {
      if (key in result) {
        result[key] = mergeRecursiveV2(result[key], target[key])
      } else {
        result[key] = target[key]
      }
    }
    return result
  } else {
    return target
  }
}
