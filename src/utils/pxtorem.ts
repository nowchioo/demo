const setRem = () => {
  const html = document.documentElement
  const width = html.clientWidth
  html.style.fontSize = width / 10 + 'px'
}

/**
 * @description
 * @author yangkejie
 * @date 2026-04-17 18:14
 */
const pxtorem = (): void => {
  setRem()
  window.addEventListener('resize', setRem)
}
export default pxtorem
