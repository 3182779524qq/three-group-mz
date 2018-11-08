var mysql = require('mysql')
function Tomysql (username, password) {
  console.log('那你我刚进来')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'nubia'
  })
  connection.connect()
  // const sql = 'select * from enroll'
  var addSql = 'insert into enroll(uname, passwords) values(?, ?)'
  var addSqlParams = [username, password]
  connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
      console.log(err.message)
      return
    }
    console.log('成功了')
  })
  connection.end()
}
export {
  Tomysql
}
