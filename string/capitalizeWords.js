/**
 * Capitalize the First Letter of Each Word in JavaScript
 * @param {String} str
 * @returns {String} str
 */
function capitalizeWords(str) {
  return str && str.constructor.name === 'String'
    ? str
        .toString()
        .replace(/_/g, ' ')
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
        .trim()
    : str
}

export default capitalizeWords


/* 
========================================================
  example
======================================================== 

// const t = ['one', 'tWo thre', 'trhee FOUR', 'again tTTT', 'aaaa aaaa aaaa']
// t.forEach((el, i) => {
//   console.log(`${t[i]}, ===> `, capitalizeWords(el))
// })

*/



/**
 * Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial
 * @param {*} str
 * @returns
 * @example
 * capitalizeSentence("abc def ghi") // 'Abc Def Ghi'
 * capitalizeSentence("abcd_ef") // 'Abcd Ef'
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

export capitalizeSentence
