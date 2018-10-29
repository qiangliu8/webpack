var express = require('express')
var app = express()
app.get('/',function(req,res){
  res.send('asds')
})
var server = app.listen(8088,function(){
  // var host = server.address().address
  // var port = server.address().port
  // console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
app.get('/user',function(req,res){
  res.send('sss')
})