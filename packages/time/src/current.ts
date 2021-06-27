/**
 * @description 获取现在时间
 */

/**
 * 获取当前年份
 */
export function getCurYear() {
  return dayjs().year()
}

import dayjs from 'dayjs'

/**
 * 获取当前月份, 从1开始(1月=1)
 */
export function getCurMonth(formate) {
  if (formate && dayjs().month() + 1 < 10) {
    return `0${dayjs().month() + 1}`
  }
  return dayjs().month() + 1
}

/**
 * 获取当前日
 */
export function getCurDay(formate) {
  if (formate && dayjs().date() < 10) {
    return `0${dayjs().date()}`
  }
  return dayjs().date()
}

/**
 * 获取当前 hour(0-23)
 */
export function getCurHour(formate) {
  if (formate && dayjs().hour() < 10) {
    return `0${dayjs().hour()}`
  }
  return dayjs().hour()
}

/**
 * 获取当前 minute(0-59)
 */
export function getCurMinute(formate) {
  if (formate && dayjs().minute() < 10) {
    return `0${dayjs().minute()}`
  }
  return dayjs().minute()
}
