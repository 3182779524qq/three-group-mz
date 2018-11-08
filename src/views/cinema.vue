<template>
  <div id="zxs-all">
    <!-- <div class="zxstoolbar"></div> -->
    <ul class="zxs">
      <li v-for="(item,index) in cinema" :key="index" class="zxs-title" @click="to">
        <p class="zxs-a">{{ item }}</p>
        <div id="zxs-dis">
          <ol class="zxs-content" v-for="(cer,ind) in cinemas" :key="ind" v-if="cer.district.name===item">
            <li class="zxs-cinema">
              <div>
                <p class="zxs-p1">{{cer.name}}</p><img src="../../static/img/zxs_zuo.png" class="zxs-zuo">
                <p class="zxs-p2">{{cer.address}}</p>
                <p class="zxs-p3">距离未知</p>
              </div>
              <img src="../../static/img/zxs_jiantou.png" class="zxs-jiantou">
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  /*  el: '#zxs-all', */
  data () {
    return {
      cinemas: []
    }
  },
  methods: {
    to () {
      var e = event
      var target = e.target || e.srcElement

      if (target.getAttribute('class') === 'zxs-a') {
        console.log(target.parentNode.children)
        if (window.getComputedStyle(target.parentNode.children[1], null)['display'] === 'none') {
          target.parentNode.children[1].style.display = 'block'
        } else {
          target.parentNode.children[1].style.display = 'none'
        }
      }
    }
  },
  computed: {
    cinema () {
      var newArr = []
      this.cinemas.forEach(function (item, index) {
        if (newArr.indexOf(item.district.name) === -1) {
          newArr.push(item.district.name)
        }
      })
      return newArr
    }
  },
  mounted () {
    const proxy = 'https://bird.ioliu.cn/v1/?url='
    axios.get(proxy + 'https://m.maizuo.com/v4/api/cinema')
      .then(result => {
        var res = result.data
        console.log(res)
        if (res.status === 0) {
          this.cinemas = res.data.cinemas
          console.log(this.cinemas)
        } else {
          console.log(res.msg)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
  body{
    background:#EBEBEB;
  }
  .zxs-title {
    font-size: 0.14rem;
    color: #636363;
    cursor: pointer;
    line-height: 0.4rem;
    background: #e1e1e1;
    margin-bottom: 0.01rem;
    color: #636363;
    cursor: pointer;
  }
  #zxs-dis {
    display: none;
    padding-left: 0;
  }
  .zxs-content {
    margin: 0 auto;
    border-bottom: 0.01rem solid #e1e1e1;
    cursor: pointer;
    width: 100%;
    height: 1rem;
    background: white;
    overflow: hidden;
    position:relative;
  }
  .zxs-content .zxs-cinema {
    padding: 0.1rem 0 0.12rem 0rem;
    cursor: pointer;
    width: 75%;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .zxs-p1 {
    max-width:75%;
    margin-top: 0.05rem;
    display: inline-block;
    font-size: 0.16rem;
    /* width: 100%; */
    height: 0.2rem;
    line-height: 0.2rem;
    padding-left: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position:relative;
  }
  .zxs-p2,
  .zxs-p3 {
    font-size: 0.12rem;
    line-height: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #ccc;
    padding-left: 0.1rem;
  }
  .zxs-jiantou{
    width:0.07rem;
    height:0.11rem;
    position:absolute;
    top:0.2rem;
    right:0.2rem;
  }
  .zxs-zuo{
    width:0.18rem;
    height:0.17rem;
    margin-left:0.05rem;
  }
  .zxs-a{
    padding-left:0.1rem;
  }
  /* .zxs-span{
    position:relative;
  } */
  /* .zxs-zuo{
    position:absolute;
    top:0rem;
    left:0rem;
  } */
</style>
