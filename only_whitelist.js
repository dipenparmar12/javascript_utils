// return whitelisted properties of an object 

module.exports = function(obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
};


/*

// Example 
// An array or space-delimited string may be given:

var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};
var user = only(obj, 'name last email');

You can also use array form:

var user = only(obj, ['name', 'last', 'email']);

yields:

{
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
}

*/

/// Src: https://github.com/tj/node-only/blob/master/index.js
