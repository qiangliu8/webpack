import React from 'react'
import { Card, WingBlank, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import { getUserList } from 'redux/chatuser.redux.js'

@connect(
  state => state,
  { getUserList }
)

class Cook extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.getUserList('cook')
  }
  render () {
    return (
      <WingBlank>
        {this.props.chatuser.userlist.map(v => (
          <React.Fragment key={v._id}>
            {v.avator ?
              (<Card>
                <Card.Header
                  title={v.user}
                  thumb={require(`assets/head/${v.avator}.png`)}
                  thumbStyle={{ width: 40, height: 40 }}
                  extra={<span>菜系：{v.cuisine}</span>}
                />
                <Card.Body>
                  {/* <div>{v.flavor.split('\n').map(v => (
                    <div key={v.id}>{v}</div>
                  ))}</div> */}
                  <div>{v.flavor}</div>
                </Card.Body>
                <Card.Footer content={`会烧${v.knife}种菜`} extra={<div>预算：￥{v.budget}</div>} />
              </Card>) : null}
            <WhiteSpace />
          </React.Fragment>
        ))}
      </WingBlank>
    )
  }
}
export default Cook