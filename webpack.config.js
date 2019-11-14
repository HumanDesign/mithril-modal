// webpack.config.js

const path = require('path');

module.exports = {
  entry: './demo.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
};
