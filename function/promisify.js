/**
 * Search value inside array of Object
 * @param {Function} func
 * @returns
 * @src: https://javascript.info/promisify
 */
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        // our custom callback for f
        err ? reject(err) : resolve(manyArgs ? results : results[0]) // resolve with all callback results if manyArgs is specified
      }

      args.push(callback)

      f.call(this, ...args)
    })
  }
}

export default promisify

/**
 * 
usage:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...);
*/
