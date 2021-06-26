import dayjs from 'dayjs'

// export function roll(roll: string): string {
//   return `I rolled a dice: ${roll}. Outcome grim`
// }

// /**
//  * 按照格式获取现在时间
//  * 默认: YYYY-MM-DD HH:mm
//  */
// export function getCurTimeStr(formate: string) {
//   if (!formate) {
//     formate = 'YYYY-MM-DD HH:mm'
//   }
//   return dayjs().format(formate)
// }

// /**
//  * 获取当前月份，天数
//  */
// export function getCurDayCntOfMonth(): number {
//   const firstD = dayjs().startOf('month').date() // 1
//   const lastD = dayjs().endOf('month').date() // 31/30/28
//   return lastD - firstD + 1
// }

/**
 * jest 用
 */
export function add(one: number, two: number) {
  return one + two
}
