<template>
  <div class="card">
    <div class="card_query">
      <ul class="query_tab">
        <li :class = "{'active' : isactive === true}" @click="isactive = true ">卖座卡</li>
        <li :class = "{'active' : isactive === false}" @click="isactive = false ">电子卖座卡</li>
      </ul>
      <div class="cfj_input">
        <div class="cfj_car"></div>
        <div class="cfj_pwd"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  name: 'buyCard',
  data () {
    return {
      isactive: true
    }
  },
}
</script>
<style scoped>
  .card{
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
  .card img{
    width: 3.4rem;
    height: 1.9rem;
  }
  .query_tab{
    background-color: #fff;
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
    font-size: 0.15rem;
    color: #ccc;
  }
  .query_tab li{
    float: left;
    text-align: center;
    font-size: 0.16rem;
    line-height: 0.45rem;
    width: 50%;
    box-shadow: 0 -1px #ff7100 inset;
    transition: all 0.2s ease;
  }
  .query_tab .active{
    box-shadow: 0 -4px #ff7100 inset;
  }
  .cfj_input{
    margin-top: 0.2rem;
    padding: 0 0.32rem;
  }
  .footer_left{
    float: left;
  }
  .footer_left h3{
    font-size: 0.12rem;
    /* float: left; */
  }
  .footer_left p{
    font-size: 0.08rem;
    /* float: left; */
  }
  .score{
    font-size: 0.18rem;
  }
</style>
