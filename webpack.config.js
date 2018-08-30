const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dev'),
    publicPath:'/dev/',
    filename: 'js/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'babel-preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    //处理html文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    //处理css部分
    new ExtractTextPlugin("scss/[name].css"),
    //提出公共css部分
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
          default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
          },
          //打包重复出现的代码
          vendor: {
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5, // The default limit is too small to showcase the effect
              minSize: 0, // This is example is too small to create commons chunks
              name: 'vendor'
          },
          //打包第三方类库
          commons: {
              name: "commons",
              chunks: "initial",
              minChunks: Infinity
          }
      }
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: "manifest"
    }),
  ],
  devServer: {
    port:1003
  }
}