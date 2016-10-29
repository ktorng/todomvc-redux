const webpack = require('webpack'); // require the webpack lib

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // set the URL for the hot reload
    'webpack/hot/only-dev-server', // reload only the dev server
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true // active hot loading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
  ]
};
