import eruda from 'eruda'
const install = (
  config = {
    autoScale: true, // 自动适配缩放
    useShadowDom: true, // 使用 Shadow DOM 隔离样式
    theme: 'light', // 主题（light/dark）
  },
) => {
  eruda.init(config)
}
export { install }
