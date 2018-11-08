var sqlMap = {
  user: {
    onlyUser: 'select * from enroll where uname = ?',
    add: 'insert into enroll(uname, passwords) values(?, ?)'
  }
}
module.exports = sqlMap;
