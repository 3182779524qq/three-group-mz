<template>
  <div class="city">
    <div class="city-tite">
      GPS定位你所在城市
    </div>
    <div class="detail">
      <span class="citli">{{cityn}}</span>
    </div>
    <div class="hot-city">
      <div class="city-tite">热门城市</div>
      <div class="detail">
        <span class="citli cl nocl" @click = "baocun('北京', 12)">北京</span>
        <span class="citli cl nocl" @click = "baocun('上海', 11)">上海</span>
        <span class="citli cl nocl" @click = "baocun('广州', 13)">广州</span>
        <span class="citli cl nocl" @click = "baocun('深圳', 10)">深圳</span>
    </div>
    </div>
    <div class="index-city">
      <div class="word">
        <div class="city-tite">按字母排序</div>
        <div class="detail">
          <a class="citli cl" v-for="(item,index) in letter" :key="index" @click='returnTop(item)'>{{item}}</a>
        </div>
      </div>
    </div>
    <div class="index-city-list">
      <div v-for="(item,index) in addsrss" :key="index">
        <div class="city-tite" :id="item">{{item}}</div>
        <div class="detail">
          <a class="citli cl yanshi" v-for="(adds,num) in getcity[index]" :key="num" @click="baocun(adds.name,adds.id)">{{adds.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const api = 'https://bird.ioliu.cn/v1/?url='
export default {
  data () {
    return {
      getcity: [],
      letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      addsrss: [],
      cityn: ''
    }
  },
  methods: {
    getdata () {
      axios.get(api + 'https://m.maizuo.com/v4/api/city').then(result => {
        if (result.status === 200) {
          var str = result.data.data.cities
          for (var i = 0; i < this.letter.length; i++) {
            var newarr = []
            for (var j = 0; j < str.length; j++) {
              if (this.letter[i] === str[j].pinyin.charAt(0)) {
                newarr.push({name: str[j].name, id: str[j].id})
              }
            }
            if (newarr.length !== 0) {
              this.addsrss.push(this.letter[i])
              this.getcity.push(newarr)
            }
          }
        } else {
          console.log(result.status)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    returnTop (item) {
      document.querySelector(`#${item}`).scrollIntoView(true)
    },
    baocun (name, id) {
      document.cookie = `cityId = ${id}`
      document.cookie = `cityName = ${name}`
      this.$router.push('/')
    },
    cityname () {
      axios.get('https://bird.ioliu.cn/v2/?url=https://apis.map.qq.com/ws/location/v1/ip?ip=113.92.93.53&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU').then(result => {
        var src = result.data.result.ad_info
        if (result.status === 200) {
          this.cityn = src.city
          document.cookie = 'cityId = 10'
          document.cookie = `cityName = ${src.city}`
          console.log(src)
        }
      })
    }
  },
  mounted () {
    this.cityname()
    this.getdata()
  }
}
</script>
<style>
  .city-tite{
    padding-left: .15rem;
    font-size: .14rem;
    line-height: .40rem;
    background-color: #ebebeb;
  }
  .detail{
    width: 100%;
    background: #ffffff;
    min-width: 3.20rem;
    color: #e2941a;
  }
  .detail .citli{
    width: 24%;
    font-size: .16rem;
    line-height: .46rem;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .detail .cl{
    color: #838383;
    border-bottom: #ebebeb 1px solid;
    box-sizing: border-box;
  }
  .detail .nocl{
    border-bottom:0;
  }
</style>
