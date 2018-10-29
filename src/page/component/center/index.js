import React from 'react'
import { Result, WingBlank, Modal,WhiteSpace,List } from 'antd-mobile'
import { connect } from 'react-redux'
import { logoutSubmit } from 'redux/user.redux'
import { Redirect } from 'react-router-dom'
import cookies from 'browser-cookies'
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
@connect(
  state => state,
  { logoutSubmit }
)

class Center extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    // this.props.getUserList('cook')
  }
  logout () {
    const alertInstance = alert('确定退出么', '', [
      { text: '取消', onPress: () => console.log('取消'), style: 'default' },
      {
        text: '确定', onPress: () => {
          cookies.erase('userId')
          // window.location.reload()
          this.props.logoutSubmit()
        }
      },
    ]);
  }
  render () {
    const props = this.props.user
    return props.avator?(
      <div>
        <Result
          img={<img src={require(`assets/head/${props.avator}.png`)} style={{ width: 50,height: 50,borderRadius: '50%' }} alt="" />}
          title={props.user}
          message={props.type==='epicure'?'美食达人':'匠心食神'}
        />
        {props.type==='cook'?<List renderHeader={() => '简介'} className="my-list">
            <Item  align="top"  multipleLine>
              {props.cuisine} <Brief>喜爱：{props.flavor}</Brief><Brief>预算：{props.budget}</Brief>
            </Item>
          </List> :
          <List renderHeader={() => '简介'} className="my-list">
            <Item  align="top"  multipleLine>
              {props.range} <Brief>{props.like}</Brief><Brief>{props.range}</Brief>
            </Item>
          </List>}
        <WhiteSpace></WhiteSpace>
        <List >
          <Item onClick={()=>this.logout()}>退出登录</Item>
        </List>
      </div>
    ):<Redirect to={props.redirectTo}/>
  }
}
export default Center