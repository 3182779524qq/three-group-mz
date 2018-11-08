<template>
    <div>
      <ul>
        <li v-for="(item,index) in strdata" :key="index">
          <router-link :to="{name: 'detauls',params: {id: item.id}}" class="list">
            <div class="ph"><img :src="item.poster.origin"></div>
            <div class="word">
              <div class="fist">
                <div class="tit">{{item.name}}</div>
                <div class="num">{{item.grade}}</div>
                <div class="jiantou"></div>
              </div>
              <div class="two">{{item.intro}}</div>
              <div class="film-counts">
                <span class="color1">{{item.cinemaCount}}</span>
                <span class="fileview">家影院上映</span>
                <span class="piao">{{item.watchCount}}</span>
                <span class="gou">人购票</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>
<script>
import axios from 'axios'
const api = 'https://bird.ioliu.cn/v1/?url='
export default {
  data () {
    return {
      strdata: []
    }
  },
  methods: {
    getdata () {
      axios.get(api + 'https://m.maizuo.com/v4/api/film/now-playing?page=1&count=37').then(result => {
        var src = result
        if (src.statusText === 'OK') {
          this.strdata = src.data.data.films
        } else {
          console.log(1)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style scoped>
  .list{
    display: flex;
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
  }
  .ph{
    width: .6rem;
  }
  .ph img{
    width: 100%;
  }
  .word{
    padding-left: .15rem;
    width: 75%;
  }
  .word .fist{
    display: flex;
  }
  .word .fist .tit{
    font-size: .16rem;
    line-height: .32rem;
    width: 2.10rem;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .word .fist .num{
    font-size: .16rem;
    line-height: .32rem;
    color: #fc7103;
  }
  .word .fist .jiantou{
    margin-left: .05rem;
    width: .12rem;
    line-height: .29rem;
    background: url("../../static/img/jiantou.png") no-repeat 0 center;
    color: #c6c6c6;
  }
  .word .two{
    height: .24rem;
    line-height: .24rem;
    color: #8e8e8e;
    font-size: .12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
  }
  .word .film-counts{
    line-height: .24rem;
    color: #8e8e8e;
    font-size: .12rem;
  }
  .word .film-counts .color1{
    color: #8aa2bf;
  }
  .word .film-counts .piao{
    color: #8aa2bf;
    margin-left: .22rem;
  }
  .list:last-of-type{
    border-bottom:0;
  }
</style>
