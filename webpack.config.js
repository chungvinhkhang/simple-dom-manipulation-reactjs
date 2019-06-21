const path = require('path');

module.exports = {
  entry: './public/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};