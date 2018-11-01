import React from 'react'
import io from 'socket.io-client'
class Chat extends React.Component{
    componentDidMount(){
        const socket = io('ws://localhost:1004')
    }
    render(){
        console.log(this.props)
        return (
            <div>Chat with user :{this.props.match.params.user}</div>
        )
    }
}
export default Chat