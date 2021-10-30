
// Src:  https://stackoverflow.com/a/55785839/8592918
const isFunction = value => value && (Object.prototype.toString.call(value) === "[object Function]" || "function" === typeof value || value instanceof Function);
