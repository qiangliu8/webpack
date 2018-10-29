import React from 'react'
import {connect} from 'react-redux'
import 'scss/message.scss'
@connect(
  state => state,
)

class Message extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
  render () {
    return (
      <div>
        <div class="images">
          <div className="bg1"></div>
          <div className="bg2"></div>
          <div className="bg3"></div>
        </div>
      </div>
    )
  }
}
export default Message