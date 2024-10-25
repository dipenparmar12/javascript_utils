
/**
 * Flattens a nested object into a single-level object with dot-separated keys.
 * @param {Object} obj - The object to flatten.
 * @param {Object} [options] - An options object.
 * @param {number} [options.startAtDepth=1] - The depth at which to start flattening the object.
 * @param {number} [options.maxDepth=Infinity] - The maximum depth to flatten the object.
 * @param {number} [currentDepth=0] - The current depth of the object being flattened.
 * @param {string} [prefix=''] - The prefix to use for the current object level.
 * @returns {Object} The flattened object.
 * @example
 * const nestedObj = {
 *   a: 1,
 *   b: {
 *     c: 2,
 *     d: [3, 4],
 *     e: {
 *       f: 5,
 *       g: [6, 7]
 *     }
 *   }
 * };
 *
 * const flattenedObj = flatten(nestedObj);
 * console.log(flattenedObj);
 * // Output:
 * // {
 * //   "a": 1,
 * //   "b.c": 2,
 * //   "b.d[0]": 3,
 * //   "b.d[1]": 4,
 * //   "b.e.f": 5,
 * //   "b.e.g[0]": 6,
 * //   "b.e.g[1]": 7
 * // }
 */
function flatten(
  obj,
  { startAtDepth = 1, maxDepth = Infinity } = {},
  currentDepth = 0,
  prefix = '',
) {

  // if maxDepth is not a number, set it to Infinity
  if (typeof maxDepth !== 'number') {
    maxDepth = Infinity
  }

  // Helper to determine if we should start flattening at the given depth
function shouldFlattenAtDepth(currentDepth, startAtDepth) {
  return currentDepth >= startAtDepth
}

// Helper to create a consistent property path
function createPropPath(prefix, key) {
  return prefix ? `${prefix}.${key}` : key
}

  const result = shouldFlattenAtDepth(currentDepth, startAtDepth)
    ? {}
    : Array.isArray(obj)
      ? []
      : {}

  for (const key in obj) {
    const propPath = Array.isArray(obj)
      ? `${prefix}[${key}]`
      : createPropPath(prefix, key)
    const value = obj[key]

    if (
      typeof value === 'object' &&
      value !== null &&
      currentDepth < maxDepth
    ) {
      const flattened = flatten(
        value,
        { startAtDepth, maxDepth },
        currentDepth + 1,
        propPath,
      )

      // Handling the transition level where flattening starts
      if (shouldFlattenAtDepth(currentDepth + 1, startAtDepth)) {
        Object.assign(result, flattened)
      } else {
        result[key] = flattened
      }
    } else {
      if (shouldFlattenAtDepth(currentDepth, startAtDepth)) {
        result[propPath] = value
      } else {
        result[key] = value
      }
    }
  }

  return result
}

export default flatten


// Test data
let data = {
  user: {
    name: 'JOhn',
    age: 30,
    preferences: {
      color: 'blue',
      food: 'pizza',
    },
    hobbies: ['reading'],
  },
  UserMe: {
    name: 'ME John',
    age: 31,
    preferences: {
      color: 'green',
      food: 'pizza',
    },
    hobbies: ['reading', 'swimming'],
  },
};

// Test cases
console.log(flatten(data));

// Test cases
console.log(flatten(data), { maxDepth : 1 });

// console.log('Test with startAtDepth: 1');
// console.log(flatten(data, { startAtDepth: 1 }));

// console.log('\nTest with startAtDepth: 2');
// console.log(flatten(data, { startAtDepth: 2 }));

/* ------------------------------------
  Example
    const nestedObj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4],
      e: {
        f: 5,
        g: [6, 7]
      }
    }
  };
  const flattenedObj = flatten(nestedObj);
  console.log(flattenedObj);
  // Output:
  // {
  //   "a": 1,
  //   "b.c": 2,
  //   "b.d[0]": 3,
  //   "b.d[1]": 4,
  //   "b.e.f": 5,
  //   "b.e.g[0]": 6,
  //   "b.e.g[1]": 7
  // }
 */


/**
 * A function to convert multilevel object to single level object
 * and use key value pairs as Column and row pairs using recursion
 * @param {*} data
 * @returns {VerifyKeyObjectInput}
 * @see https://github.com/appbaseio/reactivecore/blob/master/src/utils/helper.js#L1074
 */
function flattenV2(data) {
  const result = {}

  function recurse(cur, prop = '') {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      result[prop] = JSON.stringify(cur) // NOTE:: string casting.
    } else {
      let isEmpty = true
      Object.keys(cur).forEach((p) => {
        isEmpty = false
        recurse(cur[p], prop ? `${prop}.${p}` : p)
      })
      if (isEmpty && prop) {
        result[prop] = {}
      }
    }
  }

  recurse(data)

  return result
}

export { flattenV2 };

/* 
========================================================
  Usage/Example 
======================================================== 

flattenV2({ type: 'Land', id: 'a086g000000zfUj' })
data = {
  a: 1,
  b: 2,
  c: {
    c1: 'c11',
    c2: 'C22',
  },
  d: {
    d1: 'd444',
    d2: {
      dd1: 1,
      d: false,
    },
  },
}

flattenV2(data)
// {
//   "a": 1,
//   "b": 2,
//   "c.c1": "c11",
//   "c.c2": "C22",
//   "d.d1": "d444",
//   "d.d2.dd1": 1,
//   "d.d2.d": false
// }


flattenV2(data)
*/

// export default function flattenV2(data) {
//   var result = {}
//   function recurse(cur, prop) {
//     if (Object(cur) !== cur) {
//       result[prop] = cur
//     } else if (Array.isArray(cur)) {
//       for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop + '[' + i + ']')
//       if (l === 0) result[prop] = []
//     } else {
//       var isEmpty = true
//       for (var p in cur) {
//         isEmpty = false
//         recurse(cur[p], prop ? prop + '.' + p : p)
//       }
//       if (isEmpty && prop) result[prop] = {}
//     }
//   }
//   recurse(data, '')
//   return result
// }
