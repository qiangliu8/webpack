import React from 'react'
import { List, InputItem,NavBar, Icon  } from 'antd-mobile'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { getMsgList, sendMsg, recvMsg } from 'redux/chat.redux.js'
import 'scss/chat.scss'

const socket = io.connect('ws://localhost:1004')
const Item = List.Item
const Brief = Item.Brief

@connect(
    state=>state,
    { sendMsg}
)
class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state={text:'',msg:[]}
    }
    componentDidMount () {
        var len = $('.chatPage')[0].scrollHeight+100
        $('.chatPage').scrollTop(len) 
        this.bootomEvent()
    }
    bootomEvent () {
        $('.chatPage').bind('DOMSubtreeModified', () => {
            var len = $('.chatPage')[0].scrollHeight+100
            $('.chatPage').scrollTop(len)
        })
    }
    handleSubmit () {
        // socket.emit('action');表示发送了一个action命令，命令是字符串的，在另一端接收时，可以这么写： socket.on('action',function(){...});
        if (!this.state.text) {
            return false;
        }
        // socket.emit('sendmsg', { text: this.state.text })
        const from = this.props.user._id
        const to = this.props.match.params.to
        const msg = this.state.text
        this.props.sendMsg({ from, to, msg })
        this.setState({ text: '' })
        // console.log(this.state)
    }
    render () {
        const { to } = this.props.match.params
        return (
            <div className="chatPage">
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push('/cook')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >{this.props.match.params?this.props.match.params.to:null}</NavBar>
                {this.props.chat.chatmsg.map(v => {
                    return v.from == to ? (
                        <div className="chatList " >
                            
                             <p className="left" key={v._id}>{v.content}</p>
                        </div>
                    ) : (
                        <div className="chatList" >
                                <p className="right" key={v._id}>{v.content}</p>
                        </div>
                    )
                })}

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