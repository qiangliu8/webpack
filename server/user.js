const express = require('express')
const Router = express.Router()
const UserModel = require('./model')

const User = UserModel.getModel('user')


Router.get('/info', function (req, res) {
  return res.json({code:1})
})

Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})


Router.post('/register', function (req, res) {
  console.log(req.body)
  const { user, pwd, type } = req.body
  User.findOne({ user}, function (err, doc) {
    if (doc) {
      return res.json({code:1,msg:'用户名重复'})
    }
    User.create({ user, pwd, type }, function (e, d) {
      if (e) {
        return res.json({code:1,msg:'异常'})
      }
      return res.json({code:0,msg:'注册成功'})
    })
  })
})
// Router.get('/list', function (req, res) {
//   User.remove({}, function (err, doc) {
//     return res.json(doc)
//   })
// })

module.exports = Router