/**
 * 
 * @param {*} url 
 * @returns obj
 * @src https://www.30secondsofcode.org/js/s/get-url-parameters
 * @src https://www.30secondsofcode.org/articles/s/javascript-modify-url-without-reload
 * @src https://zgadzaj.com/development/javascript/how-to-change-url-query-parameter-with-javascript-only
 */
function getURLParameters(url) {
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
function setUrlQryParams(obj, isDelete) {
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
 function setUrlQryParams(obj, isDelete, removeOtherParams = false) {
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