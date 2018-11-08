<template>
  <div class="city">
    <div class="city-tite">
      GPS定位你所在城市
    </div>
    <div class="detail">
      <span class="citli">深圳</span>
    </div>
    <div class="hot-city">
      <div class="city-tite">热门城市</div>
      <div class="detail">
        <span class="citli cl">北京</span>
        <span class="citli cl">上海</span>
        <span class="citli cl">广州</span>
        <span class="citli cl">深圳</span>
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
          <span class="citli cl" v-for="(adds,num) in getcity[index]" :key="num">{{adds}}</span>
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
      addsrss: []
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
                newarr.push(str[j].name)
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
    }
  },
  mounted () {
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
    border-bottom: #ebebeb 1px solid;
  }
  .detail .cl{
    color: #838383;
  }
</style>
