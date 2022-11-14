/**
 * determine given url is relative or not
 * @param {String} src
 * @see https://dev.to/sandrarodgers/add-an-external-script-to-a-vue-component-and-defer-execution-of-logic-on-the-script-4kge
 * @example 
 * injectScript('https://cdn.jsdelivr.net/npm/vue@2.7.13', { defer: true })
 */
function injectScript(src, attrs = {}) {
  const isValidUrl =
    src &&
    src.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    )

  if (isValidUrl) {
    const script = document.createElement('script')
    Object.entries(attrs || {}).forEach(([key, val]) => {
      script.setAttribute(key, val)
    })

    script.type = 'text/javascript'
    script.async = true
    script.src = src
    document.head.appendChild(script)
  }
}

export default injectScript


/* 
========================================================
  Usage example 
======================================================== 

injectScript('cdn.com/react.js', { defer: true })

  const scripts = {
    vue_dev_tools: {
      attrName: 'value',
      src: 'http://localhost:8098',
    },
    plausible_analytics: {
      attrName: 'value',
      src: 'https://plausible.io/js/script.hash.js',
      defer: true,
    },
  }
  Object.values(scripts).forEach((script) => {
    const { src, ...attrs } = script
    injectScript(src, attrs)
  })

*/
