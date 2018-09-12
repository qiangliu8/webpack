const express = require('express')
const Router = express.Router()
const UserModel = require('./model')
const utils = require('utility')
const User = UserModel.getModel('user')
const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/info', function (req, res) {
  const { userId } = req.cookies
  if (!userId) {
      return res.json({code:90000,msg:'用户未登录'})
  }
  User.findOne({ _id: userId },_filter,function (err, doc) {
    if (err) {
      return res.json({code:1,msg:'异常'})
    }
    if (doc) {
      return res.json({code:0,data:doc})
    }
  })
})

Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.get('/delete', function (req, res) {
  User.remove({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function (req, res) {
  const { user, type } = req.body
  let { pwd } = req.body
  User.findOne({ user}, function (err, doc) {
    if (doc) {
      return res.json({code:1,msg:'用户名重复'})
    }
    const userModel = new User({ user, type, pwd: md5Pwd(pwd) })
    userModel.save(function (e, d) {
      if (e) {
        return res.json({code:1,msg:'异常'})
      }
      const { user, type, _id } = d
      res.cookie('userId',_id)
      return res.json({code:0,msg:'注册成功'})
    })
    // User.create({ user, type, pwd: md5Pwd(pwd) },_filter, function (e, d) {
    //   if (e) {
    //     console.log({ user, type, pwd: md5Pwd(pwd) })
    //     return res.json({code:1,msg:'异常'})
    //   }
    //   return res.json({code:0,msg:'注册成功'})
    // })
  })
})

Router.post('/login', function (req, res) {
  const { user, pwd } = req.body
  User.findOne({ user,pwd:md5Pwd(pwd)},_filter, function (err, doc) {
    if (!doc) {
      return res.json({code:1,msg:'用户名不存在或者密码错误'})
    }
    res.cookie('userId',doc._id)
    return res.json({code:0,data:doc})
  })
})

Router.post('/update', function (req, res) {
  const userId = req.cookies.userId
    if (!userId) {
        return res.json.dumps({code:1})
    }
    const body = req.body
    console.log(body)
    console.log(userId)
    User.findByIdAndUpdate( userId , body, function (err, doc) {
        const data = Object.assign({}, {
            user: doc.user,
            type:doc.type   
        }, body)
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + doc);
        }
        // console.log(doc)
        return res.json({ code: 0, data })
    })
})

function md5Pwd (pwd) {
  const mds = 'qiang_'
  return utils.md5(utils.md5(mds+pwd))
  
}
// Router.get('/list', function (req, res) {
//   User.remove({}, function (err, doc) {
//     return res.json(doc)
//   })
// })

module.exports = Router