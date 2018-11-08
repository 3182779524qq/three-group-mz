<template>
  <div id="app">
    <button>
      <router-link to='/file'>影片</router-link>
    </button>
    <button>
      <router-link to='/city'>城市</router-link>
    </button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    background: #ebebeb;
    height: 100%;
  }
</style>
