const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
//连接
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo 连接成功')
})

const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

User.create({
  user: '刘强',
  age:'21'
}, function (req,res) {
  if (res) {
    console.log("创建成功")
  } else {
    console.log("创建失败")
  }
})

// User.remove({ age: 21 }, function (err, doc) {
//   console.log(doc)
// })

const app = express()
// app.use(require('connect-history-api-fallback')())

  // 二级目录刷新 解决出现cannot get情况 重定向至index.html
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../dev', 'index.html'))
 })
  
app.get('/', function (req, res) {
  res.send('<h1>你好s</h1>')
})

app.get('/data', function (req, res) {
  User.find({}, function (err, doc) {
    res.json(doc)
  })
})

app.listen(1004, function () {
  console.log('Node app start at port 1004')
})