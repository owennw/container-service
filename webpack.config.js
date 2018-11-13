const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(ts|js)$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'ts-loader' },
      ],
    }, {
      test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}