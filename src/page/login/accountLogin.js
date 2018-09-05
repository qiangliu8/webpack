import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
// import { createForm } from 'rc-form';
import { axios } from 'axios'

import '../../scss/register.scss'

class accountLogin extends React.Component{
  // componentDidMount() {
  //   this.autoFocusInst.focus();
  // }
  // handleClick(){
  //   this.inputRef.focus();
  // }
  render () {
    // const { getFieldProps } = this.props.form;
    return (
      <div className="containerregister">
         <NavBar
          mode="dark"
          leftContent={<Icon type="left" size="lg" style={{marginTop:"20px"}}/>}
        ></NavBar>
        <p className="ptitle">登录</p>
        <WingBlank /><InputItem
            placeholder="用户名"
        /><WingBlank />
         <WhiteSpace />
         <WingBlank /><InputItem
            placeholder="密码"
          >
        </InputItem><WingBlank />
        <p className="pfooter">社区账号登录</p><Button className="loginBtn" >确认</Button>
      </div>
    )
  }
}

export default accountLogin