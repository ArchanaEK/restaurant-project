const path = require('path');

module.exports = {
    mode:'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.png$/,
        use: 'file-loader'
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
