npm install webpack --save-dev  安装全局到本地的webpack插件
npm install --save-dev html-webpack-plugin 安装html插件，生成html
npm install babel-loader@7 babel-core babel-preset-env --save-dev
npm install babel-preset-react --save-dev
npm install --save-dev css-loader
npm install --save-dev style-loader
cnpm install extract-text-webpack-plugin@4.0.0-beta.0 --save-dev 生成css包，让CSS包是与JS包并行加载的。



reduex默认只处理同步 ,react-thunk 异步任务需要react-thunk中间件

cnpm install babel-plugin-transform-decorators-legacy --save-dev   优化connect 代码

import { withRouter } from 'react-router-dom'

@withRouter  withRouter针对于一个子组件 props只有父组件传过来的信息 想要获取url 就必须通过这个组件来获取路由信息