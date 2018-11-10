<template>
  <div class="zxs-center">
    <div class="center-header-wrap">
      <img src="../../static/img/zxs_my.jpg" class="avatar">
      <div class="userMessage">
        <p class="zxs-username"><span>{{ username }}</span></p>
        <p class="zxs-email"><span>id:{{ id }}</span></p>
        <p class="zxs-operation"><span class="operation" @click="removeCookie">退出</span></p>
      </div>
    </div>
    <div class="center-nav">
      <ul class="menu-wrapper">
        <li class="menu_li1">
          <img src="../../static/img/zxs_0.png" class="zxs-img">
          <p class="ticket">影票订单</p>
          <p class="ticket-number0"><span class="ticket-num">0</span>张</p>
          <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
        </li>
        <li class="menu_li1">
          <img src="../../static/img/zxs_1.png" class="zxs-img">
          <p class="ticket">影票待付订单</p>
          <p class="ticket-number1"><span class="ticket-num">0</span>张</p>
          <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
        </li>
        <li class="menu_li1">
          <img src="../../static/img/zxs_2.png" class="zxs-img">
          <p class="ticket">商城订单</p>
          <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
        </li>
      </ul>
      <ul>
        <li class="menu-li2">
          <img src="../../static/img/zxs_3.png" class="zxs-img">
          <p class="ticket">我的现金券</p>
          <p class="ticket-number2"><span class="ticket-num">0</span>张</p>
          <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
        </li>
        <li class="menu-li2">
          <img src="../../static/img/zxs_4.png" class="zxs-img">
          <p class="ticket">账户余额</p>
          <p class="ticket-number3"><span class="ticket-num">0</span>元</p>
          <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
        </li>
        <li class="menu-li2">
          <img src="../../static/img/zxs_5.png" class="zxs-img">
          <p class="ticket">我的卖座卡</p>
          <p class="ticket-number4"><span class="ticket-num">0</span>张</p>
          <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
        </li>
      </ul>
      <div class="menu-li3">
        <img src="../../static/img/zxs_6.png" class="zxs-img">
        <p class="ticket">设置</p>
        <img src="../../static/img/zxs_jiantou.png" class="zxs_imgs">
      </div>
    </div>
  </div>
</template>
<script>
/* import axios from 'axios' */
export default {
  data () {
    return {
      username: '',
      id: ''
      /* center: [] */
    }
  },
  methods: {
    getCookie (key) {
      var cookieStr = document.cookie
      var arr = cookieStr.split('; ')
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].split('=')[0] === key) {
          return arr[i].split('=')[1]
        }
      }
      return ''
    },
    removeCookie () {
      console.log(this.username)
      document.cookie = 'username' + '=; expires=' + new Date(0)
      document.cookie = 'id' + '=; expires=' + new Date(0)
      this.$router.push('./login')
    }
  },
  mounted () {
    this.username = this.getCookie('username')
    this.id = this.getCookie('id')
    /* console.log(this.username)
    console.log(this.id) */
    /* const proxy = 'https://bird.ioliu.cn/v1/?url='
    axios.get(proxy + 'https://m.maizuo.com/v4/api/me')
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      }) */
  }
}
</script>
<style scoped>
  body,html{
    height:100%;
  }
  body{
    background:#EBEBEB;
    height:100%;
  }
  .zxs-center{
    flex:1;
    overflow:auto;
  }
  .center-header-wrap{
    background-color: #303030;
    color: #fff;
    padding: 0.36rem 0.12rem 0.24rem 10%;
    display:flex;
  }
  .avatar{
    width: 0.92rem;
    height: 0.92rem;
    border-radius: 50%;
    margin-right: 0.14rem;
  }
  .userMessage{
    margin-top: 0.16rem;
  }
  .zxs-username{
    font-size: 0.14rem;
    margin-bottom:0.02rem;
  }
  .zxs-email{
    font-size:0.12rem;
    margin-bottom:0.02rem;
  }
  .zxs-operation{
    font-size: 0.12rem;
    color: #ffbd80;
    margin-top: 0;
    text-decoration: underline;
  }
  .operation{
    padding: 0.05rem 0.2rem 0.05rem 0;
  }
  .center-nav{
    width: 100%;
  }
  .menu-wrapper .menu_li1{
    /* background:url('../../static/img/zxs_movie.png') no-repeat 0 center; */
    display:flex;
    background-color: white;
    padding: 0 0.1rem;
    /* width: 100%; */
    margin: 0.14rem 0;
    line-height: 0.59rem;
    cursor: pointer;
    font-size: 0.12rem;
    color: #222;
    position: relative;
  }
  .ticket{
    padding-left: 0.3rem;
    /* margin-right:2.3rem; */
    /* line-height: 0.35rem;
    vertical-align: inherit; */
  }
  .zxs-img{
    width:0.22rem;
    height:0.22rem;
    position:absolute;
    top:0.17rem;
    left:0.1rem;
  }
  .zxs_imgs{
    width:0.07rem;
    height:0.11rem;
    position:absolute;
    top:0.25rem;
    right:0.15rem;
  }
  .ticket-num{
    color:red;
    margin-right:0.05rem;
  }
  .ticket-number0{
    font-size:0.12rem;
    margin-left:2.35rem;
  }
  .ticket-number1{
    font-size:0.12rem;
    margin-left:2.1rem;
  }
  .menu-li2{
    display:flex;
    background-color: white;
    padding: 0 0.1rem;
    /* width: 100%; */
    /* margin: 0.14rem 0; */
    border-bottom:0.01rem solid #F5F5F5;
    line-height: 0.59rem;
    cursor: pointer;
    font-size: 0.12rem;
    color: #222;
    position: relative;
  }
  .ticket-number2{
    font-size:0.12rem;
    margin-left:2.2rem;
  }
  .ticket-number3{
    font-size:0.12rem;
    margin-left:2.35rem;
  }
  .ticket-number4{
    font-size:0.12rem;
    margin-left:2.2rem;
  }
  .menu-li3{
    display:flex;
    background-color: white;
    padding: 0 0.1rem;
    /* width: 100%; */
    /* margin: 0.14rem 0; */
    line-height: 0.59rem;
    cursor: pointer;
    font-size: 0.12rem;
    color: #222;
    position: relative;
    margin-top:0.14rem;
  }
  /* .zxs-img1{
    background:url('../../static/img/zxs_0.png') no-repeat 0.1rem center;
  }
  .zxs-img2{
    background:url('../../static/img/zxs_1.png') no-repeat 0.1rem center;
  }
  .zxs-img3{
    background:url('../../static/img/zxs_2.png') no-repeat 0.1rem center;
  } */
</style>
