var path = require('path');
var webpack = require('webpack');

module.exports = {
 devtool: 'eval',
 entry: [
   'webpack-hot-middleware/client',
   './client/goEventApp'
 ],
 output: {
   path: path.join(__dirname, 'static'),
   filename: 'bundle.js',
   publicPath: '/static/'
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin()
 ],
 module: {
   loaders: [{
     test: /\.js$/,
     loader: ['babel'],
     query: { 
       presets: ['es2015', 'react']
     },
     include: path.join(__dirname, 'client')
   }]
 }
};