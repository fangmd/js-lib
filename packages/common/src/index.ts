/**
 * jest 用
 */
export function add(one: number, two: number): number {
  return one + two
}

/**
 * 获取当前页面 URL 参数
 * @returns object
 */
export function getCurUrlParams(): any {
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

/**
 * 加载 js 文件
 */
export const loadScript = (url: string, callback?: () => void): void => {
  const script: any = document.createElement('script')
  script.type = 'text/javascript'
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null
        callback?.()
      }
    }
  } else {
    //Others
    script.onload = function () {
      callback?.()
    }
  }

  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}
