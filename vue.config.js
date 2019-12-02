module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: './src/views/index/main.js',
      template: './src/views/index/index.html',
      filename: 'index.html',
      title: 'index'
    },
    area: {
      entry: './src/views/area/area.js',
      template: './src/views/area/area.html',
      filename: 'area.html',
      title: 'area'
    }
  }
}
