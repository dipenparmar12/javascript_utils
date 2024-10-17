/**
 * Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial
 * @param {*} str
 * @returns
 * @example
 * capitalizeSentence("abc def ghi") // 'Abc Def Ghi'
 * capitalizeSentence("abcd Ef") // 'Abcd ef'
 *
 * @see https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/#:~:text=In%20JavaScript%2C%20we%20have%20a,%22%3B%20publication%5B0%5D.
 */
function capitalizeSentence(str, regex = /[_-]/g, replacer = ' ') {
  if (!str || !str?.split) return str
  const sanitizedWords = str.replace(regex, replacer).split(' ')

  return sanitizedWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .trim()
}

export default capitalizeSentence

// /**
//  * Sensitize & Capitalize the First Letter of given string using REGEX
//  * @param {*} str
//  * @param {*} regex
//  * @param {*} replacer
//  * @returns
//  */
//  function capitalize(str, regex = /[_-]/g, replacer = ' ') {
//   const sanitized = str.replace(regex, replacer)
//   return sanitized.charAt(0).toUpperCase() + sanitized.slice(1)
// }
