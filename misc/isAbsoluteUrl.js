/**
 * determine given url is relative or not
 * @param {*} url
 * @returns {Boolean} true/false
 * @see https://stackoverflow.com/a/19709846/8592918
 * @example 
 *  isAbsoluteUrl('http://example.com'); // true - regular http absolute URL
    isAbsoluteUrl('HTTP://EXAMPLE.COM'); // true - HTTP upper-case absolute URL
    isAbsoluteUrl('https://www.exmaple.com'); // true - secure http absolute URL
    isAbsoluteUrl('ftp://example.com/file.txt'); // true - file transfer absolute URL
    isAbsoluteUrl('//cdn.example.com/lib.js'); // true - protocol-relative absolute URL
    isAbsoluteUrl('git+ssh://example.con/item'); // true - absolute URL with '+' in scheme
    isAbsoluteUrl('/myfolder/test.txt'); // false - relative URL
    isAbsoluteUrl('test'); // false - also relative URL
 */
function isAbsoluteUrl(url) {
  return new RegExp('^(?:[a-z+]+:)?//', 'i').test(url)
}

export default isAbsoluteUrl
