var path = require('path');
var webpack = require('webpack');

module.exports = {
 devtool: 'eval',
 entry: {
  main:[
   'webpack-hot-middleware/client',
   './client/goEventApp'
 ],
  form:[
   'webpack-hot-middleware/client',
   './client/formApp',
 ]},
 output: {
   path: path.join(__dirname, 'static'),
   filename: '[name].js',
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