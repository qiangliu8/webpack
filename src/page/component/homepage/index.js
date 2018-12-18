import React from 'react'
import { NavBar,TabBar } from 'antd-mobile';
import {connect} from 'react-redux'
import NavLinkBar  from '../navlink/navlink'
import { Switch, Route } from 'react-router-dom'
import Cook from '../cook/index'
import Epicure from 'page/component/epicure/index'
import Center from 'page/component/center/index'
import Message from 'page/component/message/index'
import { getMsgList, recvMsg } from 'redux/chat.redux.js'

@connect(
  state => state,
  { getMsgList, recvMsg }
)

class HomePage extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.getMsgList()
    this.props.recvMsg()

  }
  render () {
    const user = this.props.user
    const {pathname} = this.props.location
    const navList = [
      {
        path: '/cook',
        text: '厨师',
        icon: 'cook',
        title: '厨师列表',
        component: Cook,
        hide:user.type=='epicure'
      },
      {
        path: '/epicure',
        text: '美食家',
        icon: 'eqicure',
        title: '美食家列表',
        component: Epicure,
        hide:user.type=='cook'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        badge:this.props.chat.unread,
        title: '消息列表',
        component: Message,
      },
      {
        path: '/center',
        text: '个人中心',
        icon: 'center',
        title: '个人中心',
        component: Center,
      },
    ]
    return (
      <div>
        <NavBar
          mode="dard"
          style={{position: 'fixed', width: '100%', top: 0, zIndex: 99}}
        >{navList.map(v => v.path == pathname?v.title:null )}</NavBar>
        <div style={{marginTop:55}}>
          <Switch>
            {navList.map(v => (
              <Route key={v.icon} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>

    )
  }
}
export default HomePage