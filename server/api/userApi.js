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
//位唯一用户验证
router.post('/onlyUser', (req, res) => {
  var sql = $sql.user.onlyUser;
  var params = req.body;
  console.log(params);
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
  console.log(params);
  conn.query(sql, [params.username, params.password], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
module.exports = router;
