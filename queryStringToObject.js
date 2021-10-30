
/**
 * 
 * @param {*} url 
 * @returns 
 * @src https://www.30secondsofcode.org/js/s/query-string-to-object
 */
function queryStringToObject(url) {
  return [...new URLSearchParams(url.split('?')[1])].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {}
  )
}
// queryStringToObject('https://google.com?page=1&count=10');
// // {page: '1', count: '10'}