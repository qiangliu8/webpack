const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo 连接成功')
})
// const User = mongoose.model('user', new mongoose.Schema({
//   user: { type: String, require: true },
//   pwd: { type: Number, require: true },
//   type: { type: String, require: true },
//   avator: { type: String, require: true },
//   desc: { type: String },
//   title: { type: String },
//   mactchnum: { type: String }
// }))

const models = {
  user: {
    'user': { 'type': String, 'require': true },
    'pwd': { 'type': String, 'require': true },
    'type': { 'type': String, 'require': true },
    'avator': { 'type': String, 'require': true },
    'desc': {'type': String },
    'title': { 'type': String },
    'mactchnum': { 'type': String }
  },
  chat: {
    
  }
}
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}
// User.create({
//   user: '刘强',
//   age:'21'
// }, function (req,res) {
//   if (res) {
//     console.log("创建成功")
//   } else {
//     console.log("创建失败")
//   }
// })

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}