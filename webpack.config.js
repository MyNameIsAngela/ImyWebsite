module.exports = {
  entry: './index.js',
  devtool: 'cheap-source-map',
  output: {
    filename: 'dist/bundle.js',
    publicPath: ''
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        //以下内容已存放于.babelrc中
        options: {
          presets: [
            "env", "react"
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        loader: ['url-loader'],
      }
    ]
  }
}