<template>
  <div id="layout">
    <div class="header">
      <h1>{{ msg }}</h1>
      <p>{{ fibonacci_n }}</p>
      <p class="fibonacci-string">Fibonacci string: {{fibonacci_string }}</p>
    </div>
    <div class="sidebar">
      <input v-model="fibonacci_n" placeholder="Fibonacci n">
      <vue-slider v-model="fibonacci_n" />
      <p>Fibonacci N: {{ fibonacci_n }}</p>
      <button v-on:click="step">{{ start_text }}</button>
      <button v-on:click="reset">Reset</button>
    </div>
    <canvas class="main"
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
  //run,
  newBrush,
  step,
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
      fibonacci_n: 15,
      fibonacci_string: "",
      start_text: "Start",
      value: 0
    }
  },
  methods: {
    step: function () {
      // const fibonacci_string = fibonacciWord(Number(this.message));
      // this.message = this.message.split('').reverse().join('')
      // step(this.vueCanvas, this.brush)
      if (this.running) {
        clearInterval(this.fractalsIntervalId);
        this.running = false;
        this.start_text = 'Start';
      } else {
        this.brush = newBrush(this.fibonacci_n);
        var canvas = document.getElementById('myCanvas');
        canvas.width = 0;
        canvas.width = 2000;
        this.fractalsIntervalId = setInterval(()=> {
          step(this.vueCanvas, this.brush)
          // console.log(this.brush.fibonacci_string.length)
          // console.log(this.brush.i)
          if (this.brush.fibonacci_string.length < this.brush.i) {
            this.start_text = 'Start';
            this.running = false;
            clearInterval(this.fractalsIntervalId);
          }
        }, 100)
        this.running = true;
        this.start_text = 'STOP';
      }
    },
    reset: function () {
      console.log(this.fibonacci_n);
      this.brush = newBrush(this.fibonacci_n);
      console.log(this.brush);
      var canvas = document.getElementById('myCanvas');
      canvas.width = 0;
      canvas.width = 2000;
    }
  },
  mounted() {
    // }, 1000)
    console.log("Mounted");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    this.fractalsIntervalId = null;
    this.running = false
    this.brush = newBrush(this.fibonacci_n);
    this.fibonacci_string = this.brush.fibonacci_string;
    this.vueCanvas = ctx;
    const tmp = {
      step: 1,
      x: 50,
      y: 85,
      y_next: 85,
      x_next: 50
    }
    console.log(tmp)
    // run(Number(this.message), this.vueCanvas, tmp);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#layout {
  display: grid;
  /* grid-template-columns: 1fr 35rem; */
  /* grid-template-columns: 50rem 35rem; */
  grid-template-columns: 80vw 20vw;
  grid-template-rows: 15rem 1fr;
}

.header {
  grid-column: 1 / 2;
  overflow-y: auto;
}

.main {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.sidebar {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

#myCanvas {
    border: 3px solid black;
    /*
    height: 0px;
    width: 100px
    */
    width: 100%;
}
.fibonacci-string {
  word-wrap: break-word;
}
</style>

