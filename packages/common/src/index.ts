/**
 * jest 用
 */
export function add(one: number, two: number) {
  return one + two
}

/**
 * 获取当前页面 URL 参数
 * @returns object
 */
export function getCurUrlParams() {
  const obj = {}
  if (!window) return
  const str = window.location.search || ''
  if (str && str.slice(1)) {
    // 去掉 ？ ，然后以 & 分割
    const queryArray = str.slice(1).split('&')
    queryArray.map((query) => {
      // param=value 以 = 分割
      const temp = query.split('=')
      if (temp.length > 1) {
        // 收集参数
        obj[temp[0]] = temp[1]
      }
    })
  }
  return obj
}
