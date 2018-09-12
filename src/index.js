import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware,compose } from 'redux'
import  reudcer from './redux/reducer'
import { Provider } from 'react-redux'
import { BrowserRouter,HashRouter, Route, Link ,Redirect , Switch} from 'react-router-dom'
import thunk  from 'redux-thunk'
import accountLogin from './page/login/accountLogin'
import cookInfo from './page/info/info'
import communityLogin from './page/login/communityLogin'
import Register from './page/register/register'
import AuthRoute from './page/auth/auth'
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
          <AuthRoute></AuthRoute>
          <Switch>
            <Route path="/cookinfo" component={cookInfo}></Route>
            <Route path="/epicureinfo" component={cookInfo}></Route>
            <Route path="/accountlogin" component={accountLogin}></Route>
            <Route path="/communitylogin" exact component={communityLogin}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </div>
      </BrowserRouter>
</Provider>),
  document.getElementById('root'))

