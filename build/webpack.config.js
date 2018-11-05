const path = require('path')

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [{
      test: /\.(ts|js)$/, exclude: /node_modules/, loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}