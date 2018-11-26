const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader?cacheDirectory=true',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  }

}