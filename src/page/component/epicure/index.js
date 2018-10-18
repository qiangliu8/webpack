import React from 'react'
import { NavBar,TabBar } from 'antd-mobile';
import {connect} from 'react-redux'
import NavLinkBar  from '../navlink/navlink'
import { Switch, Route } from 'react-router-dom'
function Epicure () {
  return <h2>Epicure</h2>
}
function Cook () {
  return <h2>Cook</h2>
}
function Msg () {
  return <h2>Msg</h2>
}
function Center(){
  return <h2>Center</h2>
}
@connect(
  state=>state
)

class Epicure extends React.Component{
  constructor(props) {
    super(props);
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
        title: '消息列表',
        component: Msg,
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
        >{navList.find(v => v.path == pathname).title}</NavBar>
        <div>
          <Switch>
            {navList.map(v => {
              <Route key={v.path}  component={v.component}></Route>
            })}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>

    )
  }
}
export default Epicure