
/**
 * Flattens a nested object into a single-level object with dot-separated keys.
 * @param {Object} data - The object to be flattened.
 * @param {string} [prefix=''] - The prefix to use for the flattened keys.
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
function flatten(data, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(data)) {
    const prop = prefix ? `${prefix}.${key}` : key;
    if (Object(value) !== value) {
      result[prop] = value;
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const arrayProp = `${prop}[${i}]`;
        if (Object(value[i]) !== value[i]) {
          result[arrayProp] = value[i];
        } else {
          Object.assign(result, flatten(value[i], arrayProp));
        }
      }
      if (value.length === 0) {
        result[prop] = [];
      }
    } else {
      Object.assign(result, flatten(value, prop));
    }
  }
  return result;
}

export default flatten

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
 ------------------------------------ */


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
export flattenV2

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
