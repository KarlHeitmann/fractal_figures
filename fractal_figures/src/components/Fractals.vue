<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <canvas
      id     = "myCanvas"
      width  = "2000"
      height = "2000"
      ></canvas>
  </div>
</template>

<script>
import {
  run,
  fibonacciWord,
  inteligencia,
} from '../fractals/fibonacci_word';

const fibonacci_string = fibonacciWord(15);
console.log(fibonacci_string);

console.log(inteligencia);
console.log(run);

export default {
  name: 'Fractals',
  props: {
    msg: String
  },
  data (){
    return {
      message: "Hello vue.js"
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
      console.log(this.vueCanvas);
      run(fibonacci_string, this.vueCanvas);
    }
  },
  mounted() {
    console.log("Mounted");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    this.vueCanvas = ctx;
    // run(ctx)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  display: flex;
  flex-direction: column;
}

#myCanvas {
    border: 3px solid black;
    /*
    height: 0px;
    width: 100px
    */
}
</style>

