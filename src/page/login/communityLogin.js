import React from 'react'
import { NavBar, Icon ,Button, WhiteSpace, WingBlank ,Modal} from 'antd-mobile'
import { axios } from 'axios'
import '../../scss/login.scss'
import img from '../../assets/logo.png'
import Register from '../register/register';

const prompt = Modal.prompt

class communityLogin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modal1: false
    }
  }
  closest(el, selector){
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  showModal(key,e){
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }

  onClose () {
    this.setState({
      modal1: false,
    });
  }

  onWrapTouchStart(e){
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = this.closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  toRegister () {
    this.props.history.push('/register')
  }
  render () {
    return (
      <div className="container">
        <NavBar
          leftContent="跳过"
          rightContent="社区账号登陆"></NavBar>
        <img src={img}/>
        <WingBlank size="sm" /><Button className="loginBtn" >社区账号登陆</Button><WingBlank />
        <WhiteSpace />  <WhiteSpace />
        <WingBlank size="sm" /><Button className="registerBtn" onClick={()=>this.toRegister()}>创建账号</Button><WingBlank />
        <WhiteSpace />  <WhiteSpace />
        <u onClick={(e)=>this.showModal('modal1',e)}>同意并接受小强条款</u>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={() => this.onClose()}
          title="小强条款"
          footer={[{ text: '我遵守', onPress: () => this.onClose()}]}
          // wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            不要看强哥的源码<br />
            不要看强哥的源码<br />
            不要看强哥的源码<br />
            不要看强哥的源码<br />
            不要看强哥的源码<br />
            不要看强哥的源码<br />
          </div>
        </Modal>
      </div>
    )
  }
}
export default communityLogin