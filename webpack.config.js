const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

function resolve(dir) { // 转换为绝对路径
  return path.join(__dirname, dir);
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dev'),
    // publicPath:'./',
    filename: 'js/vendor.js'
  },
  //devtool: 'inline-source-map',
  resolve: {
    modules: [ // 优化模块查找路径
      path.resolve('src'),
      path.resolve('node_modules') // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ["env", "react","stage-2"],
            plugins: ["transform-decorators-legacy"]
          }
        },
        include: path.resolve(__dirname, './src')
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
    //提出公共部分
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // })
     // 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
    //  new ParallelUglifyPlugin({
    //   // 传递给 UglifyJS 的参数
    //   uglifyJS: {
    //     output: {
    //       // 最紧凑的输出
    //       beautify: false,
    //       // 删除所有的注释
    //       comments: false,
    //     },
    //     compress: {
    //       // 在UglifyJs删除没有用到的代码时不输出警告
    //       warnings: false,
    //       // 删除所有的 `console` 语句，可以兼容ie浏览器
    //       drop_console: true,
    //       // 内嵌定义了但是只用到一次的变量
    //       collapse_vars: true,
    //       // 提取出出现多次但是没有定义成变量去引用的静态值
    //       reduce_vars: true,
    //     }
    //   },
    // }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: "manifest"
    })
  ],
  devServer: {
     contentBase: "./dev",
    // contentBase:"./dev",
    port: 1003,
    inline: true,
    hot: true,
    historyApiFallback:true,
    proxy: {
      '/': {
        target: "http://localhost:1004",
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
       }
      }
  }
  },
  performance: {
    hints:false
  },
}