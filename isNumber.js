/**
 * 
 * @param {*} x 
 * @returns boolean
 * @src https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.math.js#L56
 */

export function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}