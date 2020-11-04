<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hx-button round plain>按钮</hx-button>
        <hx-button round plain type="primary">按钮</hx-button>
        <hx-button round plain type="success">按钮</hx-button>
        <hx-button round plain type="info">按钮</hx-button>
        <hx-button round plain type="danger">按钮</hx-button>
        <hx-button round plain type="warning">按钮</hx-button>
  </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
