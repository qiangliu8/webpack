import React from 'react'
import { Card, WingBlank, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import { getUserList } from 'redux/chatuser.redux.js'

@connect(
  state => state,
  { getUserList }
)

class Epicure extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.getUserList('epicure')
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
                  extra={`最喜欢吃${v.like}`}
                />
                <Card.Body>
                <span>口味：{v.range}</span>
                </Card.Body>
              </Card>) : null}
            <WhiteSpace />
          </React.Fragment>
        ))}
      </WingBlank>
    )
  }
}
export default Epicure