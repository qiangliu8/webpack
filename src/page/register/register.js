import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
// import { createForm } from 'rc-form';
import { axios } from 'axios'

import '../../scss/register.scss'

class Register extends React.Component{
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  //   this.autoFocusInst.focus();
  // }
  handleClick(){
    this.props.history.push('/')
  }
  render () {
    // const { getFieldProps } = this.props.form;
    return (
      <div className="containerregister">
         <NavBar
          mode="dark"
          leftContent={<Icon type="left" size="lg" style={{ marginTop: "20px" }} onClick={()=>this.handleClick()}/>}
        ></NavBar>
        <p className="ptitle">输入用户名和密码</p>
        <WingBlank /><InputItem
            placeholder="用户名"
        /><WingBlank />
         <WhiteSpace />   <WhiteSpace />   <WhiteSpace />
         <WingBlank /><InputItem
            placeholder="密码"
          >
        </InputItem><WingBlank />
        <Button className="loginBtn" >登陆</Button>
      </div>
    )
  }
}
// const Register = createForm()(Registers);
export default Register