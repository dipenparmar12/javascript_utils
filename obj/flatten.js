/**
 * A function to convert multilevel object to single level object
 * and use key value pairs as Column and row pairs using recursion
 * @param {*} data
 * @returns {VerifyKeyObjectInput}
 * @see https://github.com/appbaseio/reactivecore/blob/master/src/utils/helper.js#L1074
 */
const flatten = (data) => {
  const result = {}

  function recurse(cur, prop = '') {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      result[prop] = JSON.stringify(cur)
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
export default flatten
/* 
========================================================
  Usage/Example 
======================================================== 

flatten({ type: 'Land', id: 'a086g000000zfUj' })
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

flatten(data)
// {
//   "a": 1,
//   "b": 2,
//   "c.c1": "c11",
//   "c.c2": "C22",
//   "d.d1": "d444",
//   "d.d2.dd1": 1,
//   "d.d2.d": false
// }


flatten(data)
*/

// export default function flatten(data) {
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
