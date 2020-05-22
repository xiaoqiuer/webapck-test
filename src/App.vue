<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/hello">Go to Foo</router-link>
    <router-link to="/you">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
