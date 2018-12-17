import React from 'react'
import { List, InputItem,NavBar, Icon  } from 'antd-mobile'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { getMsgList, sendMsg } from 'redux/chat.redux.js'

 const socket = io.connect('ws://localhost:1004')

@connect(
    state=>state,
    { getMsgList, sendMsg }
)
class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state={text:'',msg:[]}
    }
    componentDidMount(){
        // socket.on('recvmsg', data => {
        //     this.setState({ msg: [...this.state.msg, data.text] })
        //     console.log(data)
        // })
        this.props.getMsgList()
    }
    handleSubmit () {
        // socket.emit('action');表示发送了一个action命令，命令是字符串的，在另一端接收时，可以这么写： socket.on('action',function(){...});
        if (!this.state.text) {
            return false;
        }
        // socket.emit('sendmsg', { text: this.state.text })
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.props.msg
        this.props.sendMsg({ from, to, msg })
        this.setState({text:''})
        // console.log(this.state)
    }
    render(){
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push('/cook')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >{this.props.location.search?this.props.location.search.split('=')[1]:null}</NavBar>
                {this.state.msg.map(v => {
                    return <p key={v}>{v}</p>
                })}
                {/* <h2>Chat with user :</h2> */}
                <List className="stick-footer">
                    <InputItem
                        placeholder="请输入"
                        value={this.state.text}
                        onChange={v => {
                            this.setState({text:v})
                        }}
                        extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
                    >信息</InputItem>
                </List>
            </div>
        )
    }
}
export default Chat