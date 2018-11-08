var sqlMap = {
  user: {
    onlyUser: 'select * from enroll where uname = ?',
    add: 'insert into enroll(uname, passwords) values(?, ?)',
    login: 'select * from enroll where uname = ? and passwords = ?'
  }
}
module.exports = sqlMap;
