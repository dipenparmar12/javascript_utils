/**
 *
 * @param {*} str
 * @returns boolean
 * @src https://stackoverflow.com/a/5717133/8592918
 */
function isUrl(str) {
  if (Object.prototype.toString.call(str) === '[object String]') {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ) // fragment locator
    return !!pattern.test(str)
  }
}

export default isUrl
