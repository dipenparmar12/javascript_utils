/**
 * 
 * @param str 
 * @returns 
 */
const capitalizeWords = (str) =>
  str && str.constructor.name === 'String'
    ? str
        .toString()
        .replace(/_/g, ' ')
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
        .trim()
    : str
