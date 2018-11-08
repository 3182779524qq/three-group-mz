<template>
  <div id="app">
    <div class="header">
      <header class="cfj_header">
        <div class="cfj_header_left" @click="showleft = !showleft,showab = !showab"><i class="fa fa-bars fa-lg"></i></div>
        <div><p>卖座电影</p></div>
        <div class="cfj_address"><router-link to='/city'>深圳</router-link></div>
        <div class="cfj_my"><router-link to="/register"><i class="fa fa-user-o"></i></router-link></div>
      </header>
    </div>
    <div class="showab" v-show="showab" @click="showleft = false,showab = false"></div>
    <transition>
      <div class="left_nav" v-show="showleft">
        <ul>
          <li @click="showab = false,showleft = false"><a href="#">首页</a><i class="fa fa-chevron-right"></i></li>
          <li @click="showab = false,showleft = false"><router-link to='/file'>影片</router-link><i class="fa fa-chevron-right"></i></li>
          <li @click="showab = false,showleft = false"><router-link to ="/cinema">影院</router-link><i class="fa fa-chevron-right"></i></li>
          <li @click="showab = false,showleft = false"><a href="#">商城</a><i class="fa fa-chevron-right"></i></li>
          <li @click="showab = false,showleft = false"><router-link to="/center">我的</router-link><i class="fa fa-chevron-right"></i></li>
          <li @click="showab = false,showleft = false"><router-link to="card">卖座卡</router-link><i class="fa fa-chevron-right"></i></li>
        </ul>
      </div>
    </transition>
    <router-view/>
     <!-- <ul>
      <li>
        <router-link to="/">首页</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </li>
    </ul>
    <div>
      <router-view/>
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      showleft: false,
      showab: false
    }
  },
  name: 'App'
}
</script>
<style scoped>
p,a{
  color: #EFEFCC;
}
html,body,#app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background: #EBEBEB;
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
}
.showab{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  background: rgba(51, 51, 51, 0.7);
}
.header{
  height: 0.5rem;
  width: 100%;
}
.cfj_header{
  z-index: 7;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 0.5rem;
  width: 100%;
  background: #282828;
  line-height: 0.5rem;
}
.cfj_header_left{
  color: #999;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.25rem;
  border-right: 1px solid #2c3e50;
  text-align: center;
}
.cfj_address{
  /* float: right; */
  margin-left: 1.5rem;
}
.cfj_my{
  color: #999;
  padding-left: 0.15rem;
}
.left_nav{
  z-index: 9;
  position: fixed;
  top: 0.5rem;
  left: 0;
  width: 2.6rem;
  height: 100%;
}
.left_nav i{
  float: right;
  margin-right: 0.15rem;
  text-align: center;
  line-height: 0.5rem;
  color: #EFEFCC;
}
ul{
  position: absolute;
  /* top: 50px; */
  left: 0;
  width: 2.6rem;
  height: 100%;
  background: #282828;
}
ul li{
  width: 2.25rem;
  height: 0.5rem;
  padding-left: 0.35rem;
  line-height: 0.5rem;
  border-bottom: 1px solid #333;
}
.v-enter {
  transform: translateX(-100%);
}
.v-enter-active {
  transition: all 0.5s;
}
.v-leave-active {
  transition: all 0.5s;
}
.v-leave-to {
  transform: translateX(-100%);
}
li{
  list-style: none;
}
</style>
