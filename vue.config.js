// module.exports = {
//   publicPath: './',
//   pages: {
//     index: {
//       entry: 'src/views/index/main.js',
//       template: 'public/index.html',
//       filename: 'html/index/index.html',
//       title: 'index'
//     },
//     area: {
//       entry: 'src/views/area/main.js',
//       template: 'public/area.html',
//       filename: 'html/area/area.html',
//       title: '地区'
//     }
//   }
// }
const glob = require('glob') // 下载glob包

function getEntry (globPath) {
  let pages = {}
  glob.sync(globPath).forEach(filepath => {
    let fileList = filepath.split('/')
    let fileName = fileList[fileList.length - 2]
    pages[fileName] = {
      // 入口文件
      entry: `src/views/${fileName}/main.js`,
      // 模板来源
      template: `public/${fileName}.html`,
      // 在 dist/index.html 的输出
      filename:
        fileName === '/' ? 'html/index.html' : `html/${fileName}/index.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
}

let pages = getEntry('./src/views/*/*.js')

module.exports = {
  pages
}
