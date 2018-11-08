<template>
  <div>
    <div class="pb-warp">
        <div class="wap-header">
            <a href="" class="go-back"></a>
            注册
        </div>
        <div class="loginWrap">
            <div class="lxy-login-form">
                <form action="javascript:;" class="lxy-form">
                    <input id="uesrname" type="text" placeholder="请输入用户名">
                    <input id="password" type="password" placeholder="请输入密码">
                    <input @click="addUser" type="submit" value="注册" class="lxy-submit">
                </form>
            </div>
        </div>
        <div class="lxy-login-foter">
            <span>已有账号</span>
            <a href="#/login">立即登录</a>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    addUser (params) {
      let username = document.querySelector('#uesrname')
      let password = document.querySelector('#password')
      console.log(password.value)
      console.log(username.value)
      if (password.value === '' || username.value === '') {
        alert('用户名，密码不能为空')
      } else {
        axios.post('/api/user/onlyUser', {
          username: username.value
        }, {}).then((result) => {
          var rest = result.data
          if (rest.code === 1) {
            alert('该用户名已存在，请重新输入')
          } else {
            axios.post('/api/user/addUser', {
              username: username.value,
              password: password.value
            }, {}).then((response) => {
              console.log(response)
              if (response.data.code === 0) {
                alert('注册成功,走，登录去')
                this.$router.push('/login')
              }
            })
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.pb-wrap{
    padding-bottom:30px;
    overflow: hidden;
}
.wap-header{
    height: 50px;
    line-height: 50px;
    position: relative;
    background: #fff;
    color: #333;
    font-size: 1.3rem;
    text-align: center;
}
.go-back{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: -4px;
    content: "";
    position: absolute;
    bottom: 18px;
    left: 5%;
    border-top: #333 1px solid;
    border-right: #333 1px solid;
    transform: rotate(-135deg);
}
.loginWrap{
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: STHeiti,microsoft yahei,arial,'\5b8b\4f53';
    font-size: 12px;
    color: #333;
}
.lxy-form{
    margin-top: 25px;
    padding:0 10%;
}
.lxy-form input{
    width: 230px;
    height: 50px;
    padding: 0 45px 0 20px;
    list-style-type: none;
    outline: none;
    border: 1px solid #d4cdcd;
    border-radius: 50px;
    margin-bottom: 10px;
    font-family: STHeiti,microsoft yahei,arial,'\5b8b\4f53';
    font-size: 1rem;
}
.lxy-form .lxy-submit{
    width: 100%;
    border-radius: 44px;
    line-height: 100%;
    background: #2692ff;
    text-align: center;
    font-size: 1.15rem;
    color: #fff;
}
.lxy-login-foter{
    height: 55px;
    padding: 0 10%;
    text-align: center;
    font-size: 1rem;
}
.lxy-login-foter span{
    font-weight: 400;
    color: #c5c9d2;
}
.lxy-login-foter a{
    text-decoration: none;
    color: #333;
    font-size: 1rem;
}
</style>
