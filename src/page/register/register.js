import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Radio,Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import  axios  from 'axios'
import { connect } from 'react-redux'
import {register} from '../../redux/user.redux'
import {HocFrom} from 'util/util'
import '../../scss/register.scss'

@connect(
  state => state.user,
  {register}
)
@HocFrom
class Register extends React.Component{
  constructor(props) {
    super(props)
    // this.state = {
    //   user:'',
    //   pwd:'',
    //   repeatpwd:'',
    //   type:'cook'
    // }
  }
  componentDidMount () {
    this.props.handleChange('type','cook')
  }
  handleClick () {
    this.props.history.goBack()
  }
  // hanleChange(key,val){
  //   this.setState({[key]:val})
  // }
  radioChange (type) {
    this.setState({type:type})
  }
  toRegister () {
    this.props.register(this.props.state)
    console.log(this.props.state)
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div className="containerregister">
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/>:null}
        <NavBar
          mode="dark"
          leftContent={<Icon type="left" size="lg" style={{ marginTop: "20px" }} onClick={()=>this.handleClick()}/>}
        ></NavBar>
        <p className="ptitle">输入用户名和密码</p>
        <InputItem
            onChange={e=>this.props.handleChange('user',e)}
            placeholder="用户名"
        />
        <InputItem
            onChange={e=>this.props.handleChange('pwd',e)}
            placeholder="密码" type="password"
          >
        </InputItem>
        <InputItem
            onChange={e=>this.props.handleChange('repeatpwd',e)}
            placeholder="确认密码" type="password"
          >
        </InputItem>
        <Button className="registerBtn" onClick={() =>this.toRegister()}>下一步</Button>
        <RadioItem checked={this.props.state.type === 'cook'} onClick={()=>this.props.handleChange('type','cook')}>食神</RadioItem>
        <RadioItem checked={this.props.state.type ==='epicure'} onClick={()=>this.props.handleChange('type','epicure')}>美食家</RadioItem>
      </div>
    )
  }
}
// const Register = createForm()(Registers);
export default Register