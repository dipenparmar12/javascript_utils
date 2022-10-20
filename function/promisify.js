/**
 * Search value inside array of Object
 * @param {Function} func
 * @returns
 * @src: https://javascript.info/promisify
 */
function promisify(func) {
  return function (...args) {
    // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        // our custom callback for f (**)
        err ? reject(err) : resolve(result)
      }

      args.push(callback) // append our custom callback to the end of f arguments

      func.call(this, ...args) // call the original function
    })
  }
}

export default promisify

/**
 * 
 * usage:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...);

*/
