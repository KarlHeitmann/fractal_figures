<template>
  <div class="header">
    <h1> {{msg}} </h1>
    <p> {{fibonacci_n}} </p>
    <p class="fibonacci-string">Fibonacci string: {{fibonacci_string}} </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    fibonacci_n: Number,
    fibonacci_string: String
  }
}
</script>
