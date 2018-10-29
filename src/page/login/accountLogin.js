import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import { createForm } from 'rc-form';
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import {HocFrom} from 'util/util'
import '../../scss/accountlogin.scss'

@connect(
  state => state.user,
  { login }
)
@HocFrom
class accountLogin extends React.Component{
  constructor(props) {
    super(props)
    // this.state = {
    //   user:'',
    //   pwd:'',
    // }
  }

  // hanleChange(key,val){
  //   this.setState({[key]:val})
  // }
  handleClick () {
    this.props.history.goBack()
  }
  tologin () {
   this.props.login(this.props.state)
  }
  render () {
    // const { getFieldProps } = this.props.form;
    return (
      <div className="containerregister">
        {this.props.redirectTo&&this.props.redirectTo!='/accountLogin' ? <Redirect to={this.props.redirectTo} /> : null}
         <NavBar
          mode="dark"
          leftContent={<Icon type="left" size="lg" onClick={()=>this.handleClick()} style={{marginTop:"20px"}}/>}
        ></NavBar>
        <p className="ptitle">登录</p>
        <WingBlank /><InputItem
            onChange={e=>this.props.handleChange('user',e)}
            placeholder="用户名"
        /><WingBlank />
        <WhiteSpace />
        <WingBlank /><InputItem
            onChange={e=>this.props.handleChange('pwd',e)}
            placeholder="密码"
          >
        </InputItem><WingBlank />
        <p className="pfooter">社区账号登录</p><Button className="loginBtn" onClick={()=>this.tologin()}>确认</Button>
      </div>
    )
  }
}
// const accountLogin = createForm()(accountLogins);
// const accountLogin = Form.create()(accountLogins)
export default accountLogin