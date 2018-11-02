import React from 'react'
import {List,InputItem} from 'antd-mobile'
import io from 'socket.io-client'

const socket = io.connect('ws://localhost:1004')
socket.on('recvmsg', function (data) {
    console.log(data)
})
class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state={text:''}
    }
    componentDidMount(){

    }
    handleSubmit () {
        // socket.emit('action');表示发送了一个action命令，命令是字符串的，在另一端接收时，可以这么写： socket.on('action',function(){...});
        socket.emit('sendmsg', { text: this.state.text })
        this.setState({text:''})
        console.log(this.state)
    }
    render(){
        return (
            <div >
                <h2>Chat with user :{this.props.match.params.user}</h2>
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