module.exports = {
  // 配置使用autoprefixer 插件
  // 作用：生成浏览器css样式规则前缀
  // VueCLI 内部已经配置了 autoprefixer 插件
  // 所以又配置了一次，所以产生了冲突
  // 'autoprefixer': {
  //   browsers: ['Android >= 4.0', 'iOS >= 8']
  // },
  
  plugins: {
    // 配置使用 postcss-pxtorem
  // 作用：把 px 转为  rem
    'postcss-pxtorem': {
      //  lib-flexible 的REM 适配方案：把一行分成10份，每份十分之一
      // 所以rooValue 应该设置为你的设计稿宽度的十分之一
      // 我们的设计稿是750，所以应该设置为750/10=75
      // 但是Vant 建议设置为37.5 为什么呢？ 因为Vant是基于375写的
      // 如果是Vant的样式，就按37.5 来转换
      // 如果是 我们自己的样式，就按75来转换

      // 通过查阅文档，我们发现rootValue支持两种类型：
      //  1.数字：固定的数值
      //  2.函数：可以动态处理返回
            //    postcss-pxtorem 处理每个css 文件的时候都会来调整这个函数
            //      它会把被处理的css文件相关的信息通过参数传递给该函数

      rootValue: (module) => (/vant/gi.test(module.file) ? 37.5 : 75),


      // 配置要转换的css 属性
      // *表示所有，（如果有需要也可单独在中括号里写针对某个设定）
      propList: ['*']
    }
  }
}
