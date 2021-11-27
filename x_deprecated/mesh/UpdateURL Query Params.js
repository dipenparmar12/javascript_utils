/**
 * 
 * @param obj 
 * @src: https://www.30secondsofcode.org/articles/s/javascript-modify-url-without-reload
 */
function updateUrlQryParams(obj) {
  // https://zgadzaj.com/development/javascript/how-to-change-url-query-parameter-with-javascript-only
  // Construct URLSearchParams object instance from current URL querystring.
  var queryParams = new URLSearchParams(window.location.search)
  // Set new or modify existing parameter value.
  Object.entries(obj).forEach(([key, value]) => {
    queryParams.set(key, value)
  })
  // Replace current querystring with the new one.
  window.history.replaceState(null, null, '?' + queryParams.toString())
}