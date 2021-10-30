const uuid = () => {
  // console.log("uuid.js::");
  let S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
  );
};

export default uuid

export const genId = (len = 8) => {
  let id = "";
  do {
    id += Math.random().toString(36).substr(2);
  } while (id.length < len);
  return id.substr(0, len);
};
// import { genId } from "utils/uuid";


// This code generates unique userid for everyuser.
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};