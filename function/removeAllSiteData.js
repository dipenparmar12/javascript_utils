function removeAllSiteData() {
  // Remove all cookies
  const cookies = document.cookie.split('; ')
  for (let c = 0; c < cookies.length; c++) {
    const cookie = cookies[c]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie =
      name +
      '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' +
      window.location.hostname
  }

  // Check for Safari-specific code
  if ('safari' in window) {
    window.safari.pushNotification.permission(
      'https://*',
      0,
      function (result) {
        // Handle Safari-specific code here
        // For example, you can clear local storage in this callback
        window.localStorage.clear()
      },
    )
  } else {
    // For non-Safari browsers, handle site data removal
    window.indexedDB.databases().then(function (databaseNames) {
      databaseNames.forEach(function (name) {
        window.indexedDB.deleteDatabase(name)
      })
    })
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
}

export default removeAllSiteData
