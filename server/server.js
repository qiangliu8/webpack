const express = require('express')
const UserRouter = require('./user')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')

const history = require('connect-history-api-fallback')
//连接


// User.remove({ type:'epicure'}, function (err, doc) {
//   console.log(doc)
// })

const app = express()
//work with express

app.use(cookieParser())
app.use(bodyParser.json())
// app.use(history())

// User.remove({ type:'epicure'}, function (err, doc) {
//   console.log(doc)
// })

app.use('/user', UserRouter)

const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', function (socket) {
  console.log('user login')
  socket.on('sendmsg', function (data) {
    const { from, to, msg } = data
    const chatid = [from, to].sort().join('_')
    Chat.create({
      chatid, from, to, content: msg, function (err, doc) {
        console.log(doc)
        io.emit('recvmsg',Object.assign({},doc._doc))
    }})

  })
})

server.listen(1004, function () {
  console.log('Node app start at port 1004')
})

// require('socket.io').listen("80",{origins:'*'})

//二级目录刷新 解决出现cannot get情况 重定向至index.html
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../dev', 'index.html'))
})
