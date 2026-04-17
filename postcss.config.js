export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 关键！375设计稿就写 37.5
      propList: ['*'], // 所有css属性都转rem
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
}
