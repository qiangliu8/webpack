const express = require('express')
const UserRouter = require('./user')
const path = require('path')
const history = require('connect-history-api-fallback')
//连接

// User.remove({ age: 21 }, function (err, doc) {
//   console.log(doc)
// })

const app = express()
// app.use(history())

  //二级目录刷新 解决出现cannot get情况 重定向至index.html


app.use('/user', UserRouter)

//  app.use(history())
app.listen(1004, function () {
  console.log('Node app start at port 1004')
})
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../dev', 'index.html'))
})
 