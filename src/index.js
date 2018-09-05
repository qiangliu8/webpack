import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware,compose } from 'redux'
import  reudcer from './redux/reducer'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link ,Redirect , Switch} from 'react-router-dom'
import thunk  from 'redux-thunk'
import accountLogin from './page/login/accountLogin'
import communityLogin from './page/login/communityLogin'
import Register from './page/register/register'
import '../config/axios'
import './scss/index.scss'
import 'antd-mobile/dist/antd-mobile.css'

//校验redux 插件
const store = createStore(reudcer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDom.render(
    (<Provider store={store}>
      <BrowserRouter>
        <div>
        <Route path="/accountlogin" component={accountLogin}></Route>
        <Route path="/" exact component={communityLogin}></Route>
        <Route path="/register" component={Register}></Route>
        </div>
      </BrowserRouter>
  </Provider>),
  document.getElementById('root'))

