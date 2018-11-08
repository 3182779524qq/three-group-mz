<template>
  <div class="card">
    <div class="card_query">
      <ul class="query_tab">
        <li :class = "{'active' : isactive === true}" @click="isactive = true ">卖座卡</li>
        <li :class = "{'active' : isactive === false}" @click="isactive = false ">电子卖座卡</li>
      </ul>
      <div class="cfj_input" v-if="isactive == true ">
        <div class="cfj_car">
          <label>卡号:</label>
          <input type="text" placeholder="请输入卡号" />
          <div class="line"></div>
        </div>
        <div class="cfj_pwd">
          <label>密码:</label>
          <input type="text" placeholder="请输入密码" />
          <div class="line"></div>
        </div>
      </div>
      <div class="cfj_input" v-if="isactive == false ">
        <div class="cfj_car">
          <label>卡号:</label>
          <input type="text" placeholder="请输入电子卖座卡号" />
          <div class="line"></div>
        </div>
      </div>
      <div class="query_card">查询</div>
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
  }
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
  .cfj_input label{
    font-weight: normal;
    line-height: 34px;
    margin: 0 15px 0 10px;
    float: left;
  }
  .cfj_input input{
    border: none;
    background-color: transparent;
    height: 0.34rem;
    width: 55%;
    font-size: 0.14rem;
    vertical-align: top;
    border: none;
    outline: medium;
  }
  .cfj_input .line{
    border-width: 0px 1px 1px;
    border-style: solid;
    border-color: #ccc;
    height: 5px;
    margin-top: -5px;
  }
  .query_card{
    text-align: center;
    width: 1.6rem;
    margin: 0.25rem auto 0.3rem;
    border-radius: 0.18rem;
    background-color: #fe8233;
    height: 0.36rem;
    color: #fff;
    font-size: 0.14rem;
    line-height: 0.36rem;
    border: none;
  }
  .cfj_car,.cfj_pwd{
    margin-top: 0.3rem;
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
