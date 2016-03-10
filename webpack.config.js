//Entire Config
//Entrance -> ./client/app.js
var path = require('path');


module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'client/app.js')],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.s?css$/,  loader: 'style!css!sass'},
      { 
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?optional=es7.classProperties&stage=0'],
        exclude: /node_modules/
      },
    ]
  }
}