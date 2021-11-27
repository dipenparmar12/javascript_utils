import appEnv from "../config/appEnv";

const format_rs = (input, locate = appEnv.rs_locate || "en-IN") => {
  return (isNaN(parseInt(input))) ? input : /*'₹' + */ parseInt(input).toLocaleString(locate)
}
export default format_rs
