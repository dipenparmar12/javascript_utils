
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};


let obj = {
  a: 1
  data: obj
}

let print = JSON.stringify(obj, getCircularReplacer(), 2)
console.log(print)
