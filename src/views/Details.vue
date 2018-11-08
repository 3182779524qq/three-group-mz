<template>
  <div class="details">
    <div class="phn">
      <img :src="imgurl">
    </div>
    <div class="jieshao">
      <div class="film-word1">影片简介</div>
      <div class="director">
        <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 :</span>
        <span>{{getlist.director}}</span>
      </div>
      <div class="film-word2">
        <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 :</span>
        <span>{{name}}</span>
      </div>
      <div class="film-word2">
        <span>地区语言 :</span>
        <span>{{getlist.nation}}</span>
        <span>( {{getlist.language}} )</span>
      </div>
      <div class="film-word2">
        <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型 :</span>
        <span>{{getlist.category}}</span>
      </div>
      <div class="film-word2">
        <span>上映日期 :</span>
        <span>{{new Date(getlist.premiereAt).getMonth() + 1}}月{{new Date(getlist.premiereAt).getDate()}}日上映</span>
      </div>
      <div class="film-word3">
        {{getlist.synopsis}}
      </div>
      <div class="operation">
        <button class="btn">立即购票</button>
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
      getlist: [],
      imgurl: '',
      name: ''
    }
  },
  methods: {
    getdata () {
      axios.get(api + `https://m.maizuo.com/v4/api/film/${this.$route.params.id}`).then(result => {
        var src = result.data.data
        if (result.status === 200) {
          this.getlist = src.film
          this.imgurl = src.film.cover.origin
          for (var i = 0; i < this.getlist.actors.length; i++) {
            this.name += this.getlist.actors[i].name + '  |' + '  '
          }
        } else {
          console.log(result.status)
        }
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style scoped>
  .details{
    flex: 1;
    overflow: auto;
  }
  .phn{
    width: 100%;
  }
  .phn img{
    width: 100%;
  }
  .jieshao{
    box-sizing: border-box;
  }
  .jieshao .film-word1{
    margin: .16rem auto;
    border-left: .16rem solid RGB(228, 200, 156);
    font-size: .16rem;
    padding-left: .04rem;
  }
  .jieshao .director{
    height: .18rem;
    overflow: hidden;
    margin-bottom: .10rem;
    padding-left: .20rem;
  }
  .jieshao .film-word2{
    height: .18rem;
    overflow: hidden;
    margin-bottom: .1rem;
    padding-left: .2rem;
    padding-right: .1rem;
  }
  .jieshao .film-word3{
    text-overflow: ellipsis;
<<<<<<< HEAD
    overflow: hidden;
    min-height: 1.60rem;
=======
    min-height: 1.44rem;
>>>>>>> d
    margin-bottom: .8rem;
    padding-left: .20rem;
    padding-right: .20rem;
    display: block;
  }
  .jieshao .operation{
    position: fixed;
    left: 0;
    bottom: .20rem;
    width: 100%;
    text-align: center;
  }
  .jieshao .operation .btn{
    font-size: .14rem;
    min-width: 1.56rem;
    height: .36rem;
    line-height: .36rem;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: .18rem;
    color: #fff;
    outline: none;
  }
</style>
