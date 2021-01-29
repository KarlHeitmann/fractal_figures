<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ message }}</p>
    <vue-slider v-model="value" />
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <canvas
      id     = "myCanvas"
      width  = "2000"
      height = "2000"
      ></canvas>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import {
  run,
} from '../fractals/fibonacci_word';


export default {
  name: 'Fractals',
  components: {
    VueSlider
  },
  props: {
    msg: String
  },
  data (){
    return {
      message: "15",
      value: 0
    }
  },
  methods: {
    reverseMessage: function () {
      // const fibonacci_string = fibonacciWord(Number(this.message));
      // this.message = this.message.split('').reverse().join('')
      console.log(this.vueCanvas);
      console.log(this.brush);
    }
  },
  mounted() {
    console.log("Mounted");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    this.brush = {
      step: 1,
      x: 50,
      y: 85,
      y_next: 85,
      x_next: 50
    };
    this.vueCanvas = ctx;
    run(Number(this.message), this.vueCanvas, {
      step: 1,
      x: 50,
      y: 85,
      y_next: 85,
      x_next: 50
    });
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

