const express = require('express')
const UserRouter = require('./user')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const history = require('connect-history-api-fallback')
//连接

// User.remove({ type:'epicure'}, function (err, doc) {
//   console.log(doc)
// })

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
// app.use(history())

// User.remove({ type:'epicure'}, function (err, doc) {
//   console.log(doc)
// })


app.use('/user', UserRouter)
app.listen(1004, function () {
  console.log('Node app start at port 1004')
})
//二级目录刷新 解决出现cannot get情况 重定向至index.html
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../dev', 'index.html'))
})
