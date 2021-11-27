import {format} from 'date-fns'
import appEnv from "../config/appEnv";

const format_date = (date, d_format = appEnv.date_format || "d-MMM-yyy") => {
  return (typeof date.getMonth === 'function') ? // determine given date is DateObject or stringDate
    format(date, d_format) :
    format(new Date(date), d_format)
}

export default format_date