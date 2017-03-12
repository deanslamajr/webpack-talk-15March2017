var webpack = require('webpack')
var path = require('path')

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  }
};

module.exports = config