const pkg = require('./package.json')

module.exports = {
  entry: './index.js',
  target: 'webworker',
  devtool: 'source-map',
}
