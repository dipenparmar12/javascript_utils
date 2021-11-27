/// How can I clone a JavaScript object except for one key?
// Src: https://stackoverflow.com/questions/34698905/how-can-i-clone-a-javascript-object-except-for-one-key
// Src: https://stackoverflow.com/questions/43011742/how-to-omit-specific-properties-from-an-object-in-javascript/43011802

"use strict";

export default function omit(obj, keys) {
  if (!keys.length) return obj
  var _keys = keys instanceof Array ? keys : [keys]
  const { [_keys.pop()]: omitted, ...rest } = obj;
  return omit(rest, _keys);
}

export const _objectWithoutProperties = (obj, keys) => {
  var target = {};
  var _keys = keys instanceof Array ? keys : [keys]
  for (var i in obj) {
    if (_keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}


///////////
// var x = { a: 1, b: 2, c: 3, z: 26 };
// var b = x.b;
// var y = _objectWithoutProperties(x, ["b"]);
// let x = { a: 1, b: 2, c: 3, z: 26 };
// let { b, ...y } = x;
// console.log('exmple::x,b,y', x, b, y);

// export const _omitKeys = (obj, UnwantedKeys) => {
//   const _UnwantedKeys = UnwantedKeys instanceof Array ? UnwantedKeys : [UnwantedKeys];
//   const { _UnwantedKeys, ...omitedObj } = obj;
//   return omitedObj
// }