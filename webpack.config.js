var path = require('path');

module.exports = {
  entry: {
    main: './components/index.js',
    ext: './components/extensionColorFamily.js'
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
