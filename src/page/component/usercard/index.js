import React from 'react'
import PropTypes from 'prop-types'


@withRouter
  
class UserCard extends React.Component{
  static propTypes = {
    data:PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <div>
      <WingBlank>
        {this.props.chatuser.userlist.map(v => (
          <React.Fragment>
            {v.avator ?
              (<Card key={v.id}>
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
    </div>
    )
  }
}

export default UserCard