<template>
  <div class="header">
    <h1> {{msg}} </h1>
    <p> {{fibonacci_n}} </p>
    <p class="fibonacci-string">Fibonacci string: {{fibonacci_string}} </p>
    <button @click="btn_click">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    fibonacci_n: Number,
    fibonacci_string: String
  },
  methods: {
    btn_click() {
      console.log("CLICK");
      this.$emit('messageFromChild', 'click');
    }
  }
}
</script>

<style scoped>
.header {
  grid-column: 1 / 2;
  overflow-y: auto;
}
.fibonacci-string {
  word-wrap: break-word;
}
</style>
