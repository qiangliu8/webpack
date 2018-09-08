import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AvatorSelector from '../component/avator'
import '../../scss/info.scss'
import info from '../../assets/info/info.png'
@connect(
  state => state.user,
)

class Info extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="container_info">
        <NavBar
            mode="light"
            onrightClick={() => console.log('onLeftClick')}
            rightContent="完成"
        ></NavBar>
        <WhiteSpace size="lg" />
        <AvatorSelector></AvatorSelector>
        <WhiteSpace size="lg" />
        <InputItem labelNumber={2} 
        placeholder="快说说你擅长拯救啥样的单身狗">
          <img src={info} />
        </InputItem>
        <WhiteSpace size="md" />
        <InputItem labelNumber={2} 
        placeholder="快说说你拯救啥样的单身狗">
          <img src={info} />
        </InputItem>
      </div>
    )
  }
}

export default Info