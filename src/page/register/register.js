import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Radio,Button} from 'antd-mobile'
// import { createForm } from 'rc-form';
import  axios  from 'axios'
import { connect } from 'react-redux'
import {register} from '../../redux/user.redux'
import '../../scss/register.scss'

@connect(
  state => state.user,
  {register}
)
class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type:'bachelor'
    }
  }
  componentDidMount () {
  }
  handleClick () {
    this.props.history.goBack()
  }
  hanleChange(key,val){
    this.setState({[key]:val})
  }
  radioChange (type) {
    this.setState({type:type})
  }
  
  toRegister () {
    this.props.register(this.state)
    console.log(this.state)
  }
  render () {
    const RadioItem = Radio.RadioItem

    return (
      <div className="containerregister">
        <NavBar
          mode="dark"
          leftContent={<Icon type="left" size="lg" style={{ marginTop: "20px" }} onClick={()=>this.handleClick()}/>}
        ></NavBar>
        <p className="ptitle">输入用户名和密码</p>
        <InputItem
            onChange={e=>this.hanleChange('user',e)}
            placeholder="用户名"
        />
        <InputItem
            onChange={e=>this.hanleChange('pwd',e)}
            placeholder="密码" type="password"
          >
        </InputItem>
        <InputItem
            onChange={e=>this.hanleChange('repeatpwd',e)}
            placeholder="确认密码" type="password"
          >
        </InputItem>
        <Button className="registerBtn" onClick={() =>this.toRegister()}>下一步</Button>
        <RadioItem checked={this.state.type === 'bachelor'} onClick={()=>this.radioChange('bachelor')}>单身汉</RadioItem>
        <RadioItem checked={this.state.type ==='matcher'} onClick={()=>this.radioChange('matcher')}>媒婆</RadioItem>
      </div>
    )
  }
}
// const Register = createForm()(Registers);
export default Register