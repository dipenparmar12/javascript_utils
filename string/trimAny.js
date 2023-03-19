/**

 Trims any characters from the beginning and end of a string.
 @param {string} str - The string to trim.
 @param {string} chars - A string containing the characters to remove.
 @returns {string} - The trimmed string.
 */
const trimAny = (str, chars) => {
  let start = 0
  let end = str.length

  while (start < end && chars.includes(str[start])) {
    start++
  }

  while (end > start && chars.includes(str[end - 1])) {
    end--
  }

  return start > 0 || end < str.length ? str.substring(start, end) : str
}
export default trimAny

/*
Example usage:
console.log(trimAny(" hello world! ", " !")); // Output: "hello world"
*/
