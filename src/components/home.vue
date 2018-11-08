<template>
  <div id="hone">
    <div class="slider">
      <!-- <img src=""> -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src='https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg'/>
            <!-- <img :src="slider[0].imageUrl" /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 卡片页面 -->
    <div class="nowplaying">
      <ul class="card">
        <li v-for="(item,index) in nowplaying" :key="index">
          <router-link :to="{name: 'detauls',params: {id: item.id}}">
            <img :src="item.cover.origin" />
            <div class="footerone">
              <div class="footerone_left">
                <h3>{{item.name}}</h3>
                <p>{{item.cinemaCount}}影院上映{{item.watchCount}}人购票</p>
              </div>
              <div class="score">{{item.grade}}</div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="moreplay">更多热映电影</div>
    </div>
    <div class="line"><div class="comings">即将上映</div></div>
    <!-- comingsoon -->
    <div class="coming">
      <ul class="card">
        <li v-for="(come,index) in nowplaying" :key="index">
          <router-link :to="{name: 'detauls',params: {id: come.id}}">
            <img :src="come.cover.origin" />
            <div class="footertwo">
              <span class="footertwo_left">{{come.name}}</span>
              <span class="footertwo_right">{{new Date(come.premiereAt).getMonth()+1}}月{{new Date(come.premiereAt).getDate()}}日上映</span>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="moreplay">更多即将上映的电影</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
const proxy = 'https://bird.ioliu.cn/v1/?url='
export default {
  name: 'header',
  data () {
    return {
      msg: 'aaa',
      slider: [],
      commingsoon: [],
      nowplaying: []
    }
  },
  methods: {
    gethome () {
      axios.get(proxy + 'https://m.maizuo.com/v4/api/billboard/home').then(result => {
        console.log(result)
        this.slider = result.data.data.billboards
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          observer: true,
          autoplayDisableOnInteraction: false,
          runCallbacksOnInit: true
        })
      }).catch()
    },
    getcomming () {
      axios.get(proxy + 'https://m.maizuo.com/v4/api/film/coming-soon?__t=1541554225956&page=1&count=3').then(result => {
        console.log(result)
        this.commingsoon = result.data.data.films
      }).catch()
    },
    getnow () {
      axios.get(proxy + 'https://m.maizuo.com/v4/api/film/now-playing?__t=1541554225950&page=1&count=5').then(result => {
        console.log(result)
        this.nowplaying = result.data.data.films
      }).catch()
    }
  },
  mounted () {
    this.gethome()
    this.getcomming()
    this.getnow()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  width: 3.4rem;
  /* margin-left: 0.17rem; */
}
.card img{
  width: 3.4rem;
  height: 1.9rem;
}
li{
  background: #ffffff;
}
.footerone_left{
  float: left;
  padding-left: 0.15rem;
}
.footerone_left h3{
  text-align: left;
  font-size: 0.12rem;
  /* float: left; */
}
.footerone_left p{
  text-align: left;
  font-size: 0.08rem;
  /* float: left; */
}
.score{
  font-size: 0.18rem;
  color: #f78360;
  display: inline-block;
  line-height: 0.5rem;
  float: right;
  margin-right: 0.15rem;
}
.footertwo{
  height: 0.35rem
  /* line-height:0.35rem; */
}
.footertwo .footertwo_left{
  float: left;
  margin-left: 0.15rem;
}
.footertwo .footertwo_right{
  float: right;
  margin-right: 0.15rem;
  color: RGB(245, 162, 125);
}
.moreplay{
    width: 1.6rem;
    height: 0.3rem;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 0.1rem auto 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.12rem;
    color: #616161;
    cursor: pointer;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
#app{
  background: #EBEBEB;
}
.slider img{
  width: 100%;
  height: 2.11rem;
}
.line{
  position: relative;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #a8a8a8;
}
.comings{
  width: 0.65rem;
  height: 0.2rem;
  margin: 0 auto;
  margin-bottom: -0.1rem;
  border-radius: 5px;
  font-size: 0.1rem;
  line-height: 0.2rem;
  text-align: center;
  color: #eee;
  background-color: #a7a7a7;
}
li {
  display: inline-block;
  margin: 0 17px 17px 17px;
}
a {
  /* color: #EFEFCC; */
}
</style>
