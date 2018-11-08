<template>
  <div id="app">
    <button>
      <router-link to ="/cinema">影院</router-link>
    </button>
    <button>
      <router-link to="/center">我的</router-link>
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
#app {
  background:#EBEBEB;
}
</style>
