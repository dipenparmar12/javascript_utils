//@src: https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects

 function test(data) {
  var result = {}
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop + '[' + i + ']')
      if (l == 0) result[prop] = []
    } else {
      var isEmpty = true
      for (var p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) result[prop] = {}
    }
  }
  recurse(data, '')
  return result
}

test({"type":"Land","id":"a086g000000zfUj"})


data = {
    a: 1,
    b: 2,
    c: {
        c1:"c11",
        c2: 'C22'
    },
    d: {
        d1:'d444',
        d2: {
            dd1:1,
            d:false,
        }
    }
}
test(data)