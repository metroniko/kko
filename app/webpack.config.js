const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
  entry: ['@babel/polyfill','./src/index.js'],//входные параметры
  output: {//куда всё складывать
    path: __dirname + '/dist',// dirname - указывает путь 
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist'
  },
  plugins: [
    new HTMLPlugin({
      filename:'index.html',
      template:'./src/index.html'    
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  } 
}