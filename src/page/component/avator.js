import React from 'react'
import { NavBar, Grid,Icon ,List, InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import avatorSelector from '../component/avator'
import '../../scss/info.scss'
@connect(
  state => state.user,
)

class AvatorSelector extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const data = Array.from(new Array(8)).map((_val, i) => ({
      icon: require(`../../assets/head/${i + 1}.png`),
      title:i
    }))
    const Header = this.state.icon ? (<div style={{height:30}}><span>已选择头像</span><img style={{width:20}} src={this.state.icon}></img></div>):(<div style={{height:30}}><span>请选择头像</span></div>)
    return (
      <div >
        <List renderHeader={()=>Header}>
          <Grid data={data} columnNum={4} itemStyle={{ width: '75px', height: '75px' }}
            onClick={e => {
              this.setState(e)
              this.props.selectavator(e.title)
            }}
            activeStyle={{ background: 'red' }} />
        </List>
      </div>
    )
  }
}

export default AvatorSelector