/**
 * Reduces an array of objects into a single object.
 * @param {Array} collection of objects - The array of objects to be reduced.
 * @returns {Object} A single object created by merging all objects in the array.
 * @example
 * const userData = [{name:'dipen'}, {age:20}, {mobile:123123}]
 * const result = toSingle(userData)
 * // result
 * {
 *  name: 'dipen',
 *  age: 20,
 *  mobile: 123123
 * }
 */
function toSingle(collection) {
  if (!collection) return []
  return collection.reduce((acc, el) => {
    const [key] = Object.entries(el)[0];
    acc[key] = el[key];
    return acc;
  }, {});
}

/* 
========================================================
  example
======================================================== 
*/
//
// const userData = [
//   { name: 'John Doe', email: 'johndoe@example.com' },
//   { age: 35, address: '123 Main St' },
//   { company: 'Acme Inc', phone: '555-555-5555' },
// ];
//
// const mergedUserData = toSingle(userData);
// mergedUserData = {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   age: 35,
//   address: '123 Main St',
//   company: 'Acme Inc',
//   phone: '555-555-5555'
// };

// const productData = [
//   { productName: 'Acme Rocket', supplier1: { price: 100, stock: 50 } },
//   { productName: 'Acme Rocket', supplier2: { price: 95, stock: 75 } },
//   { productName: 'Acme Rocket', supplier3: { price: 110, stock: 25 } },
// ];

// const aggregatedProductData = toSingle(productData);
// aggregatedProductData = {
//   productName: 'Acme Rocket',
//   supplier1: { price: 100, stock: 50 },
//   supplier2: { price: 95, stock: 75 },
//   supplier3: { price: 110, stock: 25 }
// };

export default toSingle


/*
*
arr.reduce((acc, el) => {
  console.log(el)
  Object.entries(el).forEach(([k,v]) => acc[k] = v)
  return acc
}, {})
*/
