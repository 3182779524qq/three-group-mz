<template>
  <div id="app">
    <div class="header">
      <header class="cfj_header">
        <div class="cfj_header_left" @click="showleft = !showleft">
          三
        </div>
        <div><p>卖座电影</p></div>
        <div class="cfj_address"><router-link to='/city'>深圳</router-link></div>
        <div class="cfj_my">@2</div>
      </header>
    </div>
    <transition>
      <div class="left_nav" v-show="showleft">
        <ul>
          <li><a href="#">首页</a></li>
          <li><router-link to='/file'>影片</router-link></li>
          <li><router-link to ="/cinema">影院</router-link></li>
          <li><a href="#">商城</a></li>
          <li><router-link to="/center">我的</router-link></li>
          <li><router-link to="card">卖座卡</router-link></li>
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
      showleft: false
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
  text-align: center;
  color: #2c3e50;
  background: #EBEBEB;
  /* margin-top: 60px; */
}
.header{
  height: 0.5rem;
  width: 100%;
}
.cfj_header{
  z-index: 10;
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
  color: yellow;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.25rem;
}
.cfj_address{
  /* float: right; */
  margin-left: 1.5rem;
}
.left_nav{
  z-index: 9;
  position: fixed;
  top: 0.5rem;
  left: 0;
  width: 2.6rem;
  height: 100%;
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
  width: 100%;
  height: 0.5rem;
}
.v-enter {
  transform: translateX(-100%);
}
.v-enter-active {
  transition: all 1s;
}
.v-leave-active {
  transition: all 1s;
}
.v-leave-to {
  transform: translateX(-100%);
}
li{
  list-style: none;
}
</style>
