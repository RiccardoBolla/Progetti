const path = require('path');

module.exports = {
  entry: {
    albums: './src/albums.js',
    photos: './src/photos.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "prettier-loader" }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};