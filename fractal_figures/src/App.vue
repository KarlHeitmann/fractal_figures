<template>
  <Fractals msg="Fractal Figures"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Fractals from './components/Fractals.vue'

export default {
  name: 'App',
  components: {
    Fractals
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
