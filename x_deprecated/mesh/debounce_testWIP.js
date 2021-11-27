/**
 * 
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 * @returns 
 * @src https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_debounce
 */
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
  	var context = this, args = arguments;
  	clearTimeout(timeout);
  	timeout = setTimeout(function() {
  		timeout = null;
  		if (!immediate) func.apply(context, args);
  	}, wait);
  	if (immediate && !timeout) func.apply(context, args);
  };
}