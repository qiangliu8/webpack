import React from 'react'
import { Card, WingBlank, WhiteSpace} from 'antd-mobile'
import axios from 'axios'
import {connect} from 'react-redux'


@connect(
  state=>state
)

class Cook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }
  componentDidMount () {
    axios.get('/user/list?type=cook').then(res => {
      if (res.data.code === 0) {
        this.setState({data:res.data.data})
      }
    })
  }
  render () {
    console.log(this.state)
    return (
      <WingBlank>
        {this.state.data.map(v => (
          <React.Fragment>
            {v.avator ?
              (<Card key={v.id}>
                <Card.Header
                  title={v.user}
                  thumb={require(`assets/head/${v.avator}.png`)}
                  thumbStyle={{ width: 40, height: 40 }}
                  extra={<span>菜系：{v.cuisine}</span>}
                />
                <Card.Body>
                  <div>{v.flavor.split('\n').map(v => (
                    <div key={v}>{v}</div>
                  ))}</div>
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