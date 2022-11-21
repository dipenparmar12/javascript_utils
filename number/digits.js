/**
 * Split positive integer n < 1e21 into digits:
 * @param {String} str
 * @returns {Number} num
 * @example console.log(digits(1234)) // [1, 2, 3, 4]
 * @src https://stackoverflow.com/a/43794370/8592918
 */
function digits(num) {
  return Array.from(String(num), Number);
}
export default digits



/* 
========================================================
@src: https://stackoverflow.com/a/7784642/8592918
======================================================== 
let num = 123456;
let digits = num.toString().split('');
let realDigits = digits.map(Number)
console.log(realDigits);

// oneliner
let num = 123456;
let realDigits = num.toString().split('').map(Number)
console.log(realDigits);
*/
