/**
 * 获取系统类型 ios / android
 */
export function getDeviceType(): 'ios' | 'android' | 'other' {
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) return 'ios'
  if (/android/.test(ua)) return 'android'
  return 'other'
}

/**
 * 是否在微信浏览器
 */
export function isWechat(): boolean {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

/**
 * 复制文本到剪贴板
 */
export function copyText(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      navigator.clipboard.writeText(text).then(() => resolve(true))
    } catch {
      const input = document.createElement('input')
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      resolve(true)
    }
  })
}

/**
 * 防抖
 */
export function debounce(fn: (...args: any[]) => void, delay = 300) {
  let timer: any
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * 节流
 */
export function throttle(fn: (...args: any[]) => void, delay = 300) {
  let lastTime = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastTime >= delay) {
      fn(...args)
      lastTime = now
    }
  }
}

/**
 * 手机号脱敏
 */
export function maskPhone(phone: string): string {
  if (!phone || phone.length !== 11) return phone
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 去除空格
 */
export function trim(str: string): string {
  return str.replace(/\s+/g, '')
}

/**
 * 存储相关
 */
export const storage = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: (key: string) => {
    const val = localStorage.getItem(key)
    if (!val) return null
    try {
      return JSON.parse(val)
    } catch {
      return val
    }
  },
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
}

/**
 * 页面跳转（防止多次点击）
 */
export const go = throttle((url: string) => {
  location.href = url
}, 500)

/**
 * 禁止页面滚动（弹窗常用）
 */
export function lockScroll() {
  document.body.style.overflow = 'hidden'
}

export function unlockScroll() {
  document.body.style.overflow = ''
}
