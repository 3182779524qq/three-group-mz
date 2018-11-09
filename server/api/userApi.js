var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json({code:0,msg:'保存成功'});
  }
};

//唯一用户验证
router.post('/onlyUser', (req, res) => {
  var sql = $sql.user.onlyUser;
  var params = req.body;
  console.log('进入查询用户名的路由');
  conn.query(sql, params.username, function (err, result) {
    if (err) {
      console.log(err);
      res.json({ code: 101, msg: '查询失败' });
    }
    if (result) {
      if (result.length >= 1) {
        res.json({ code: 1, msg: '用户名已存在' });
      }else{
        res.json({ code: 0, msg: '用户名不存在，可保存' });
      }
    }
  })
});

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log('进入注册的路由');
  conn.query(sql, [params.username, params.password], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//用户登录接口
router.post('/login', (req, res) => {
  var sql = $sql.user.login;
  var params = req.body;
  console.log('进入登录路由了');
  conn.query(sql, [params.username, params.password], function (err, result) {
    if (err) {
      console.log(err);
      res.json({ code: 101, msg: '查询失败' });
    }
    if (result.length >= 1) {
      console.log('进入密码查询正确');
      res.json({ code: 1, msg: '用户名存在,密码正确' });
    } else {
      console.log('进入密码查询错误');
      res.send({ code: 0, msg: '密码错误，重新输入密码' });
    }
  })
});
module.exports = router;
