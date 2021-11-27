/**
 *
 * @param {*} url
 * @returns obj
 * @src https://www.30secondsofcode.org/js/s/get-url-parameters
 * @src https://www.30secondsofcode.org/articles/s/javascript-modify-url-without-reload
 * @src https://zgadzaj.com/development/javascript/how-to-change-url-query-parameter-with-javascript-only
 */
export function getURLParameters(url) {
  // url = url && window.location.search
  try {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
      ),
      {},
    )
  } catch (error) {
    console.log('getURLParameters.js::16 error', error)
    return {}
  }
}

// getURLParameters('google.com') // {}
// getURLParameters('http://url.com/page?name=Adam&surname=Smith')
// {name: 'Adam', surname: 'Smith'}

//  set or delete query params
export function setUrlQryParams(obj, isDelete) {
  // Construct URLSearchParams object instance from current URL querystring.
  const queryParams = new URLSearchParams(window.location.search)
  // Set new or modify existing parameter value.
  Object.entries(obj).forEach(([key, value]) => {
    isDelete ? queryParams.delete(key) : queryParams.set(key, value)
  })
  // Replace current querystring with the new one.
  window.history.replaceState(null, null, '?' + queryParams.toString())
}

//  Set and delete other query params
export function setUrlQryParams_(obj, isDelete, removeOtherParams = false) {
  removeOtherParams && window.history.pushState({}, document.title, '?')
  // Construct URLSearchParams object instance from current URL querystring.
  const queryParams = new URLSearchParams(window.location.search)
  // Set new or modify existing parameter value.
  Object.entries(obj).forEach(([key, value]) => {
    isDelete ? queryParams.delete(key) : queryParams.set(key, value)
  })
  // Replace current querystring with the new one.
  window.history.replaceState(null, null, '?' + queryParams.toString())
}

// @src https://stackoverflow.com/a/22753103/8592918
export function removeQueryParams() {
  window.history.pushState({}, document.title, '?')
}

export function queryStringToObject(url) {
  return [...new URLSearchParams(url.split('?')[1])].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {},
  )
}

/**
 *
 * @param obj
 * @src: https://www.30secondsofcode.org/articles/s/javascript-modify-url-without-reload
 */
export function updateUrlQryParams(obj) {
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
