const mongoose = require('mongoose')
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