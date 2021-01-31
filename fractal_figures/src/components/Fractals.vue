<template>
  <div id="layout">
    <div class="header">
      <h1>{{ msg }}</h1>
      <p>{{ fibonacci_n }}</p>
      <p class="fibonacci-string">Fibonacci string: {{fibonacci_string }}</p>
    </div>
    <div class="sidebar">
      <div class="config-item">
        <label>Recursion depth:</label>
        <input v-model="fibonacci_n" placeholder="Fibonacci n">
      </div>
      <div class="config-item">
        <label>Stroke size:</label>
        <input v-model="stroke_size" placeholder="Stroke size">
      </div>
      <div class="config-item">
        <label>Steps to draw:</label>
        <input v-model="steps_to_draw" placeholder="Steps to draw">
      </div>
      <vue-slider v-model="fibonacci_n" />
      <div class="config-item">
        <label>Origin X:</label>
        <input v-model="origin_x" placeholder="Origin X">
      </div>
      <div class="config-item">
        <label>Origin Y:</label>
        <input v-model="origin_y" placeholder="Origin Y">
      </div>
      <div class="config-item"><label>Manual:</label>
        <button v-on:click="manual">Manual</button>
      </div>
      <div class="config-item"><label>Auto:</label>
        <button v-on:click="step">{{ start_text }}</button>
      </div>
      <button v-on:click="reset">Reset</button>
      <div class="config-item"><label>Canvas X size</label>
        <input
          v-model="size_x"
          @change="cambio_width"
          >
      </div>
      <div class="config-item"><label>Canvas Y size</label>
        <input
          v-model="size_y"
          @change="cambio_height"
          >
      </div>
    </div>
    <div class="main">
      <canvas
        @click="click_origin"
        id     = "myCanvas"
        width  = "2000"
        height = "2000"
        ></canvas>
    </div>
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

const ORIGIN_X = 50;
const ORIGIN_Y = 85;

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
      stroke_size: 10,
      size_x: 2000,
      size_y: 2000,
      steps_to_draw: 10,
      origin_x: ORIGIN_X,
      origin_y: ORIGIN_Y,
      fibonacci_string: "",
      start_text: "Start",
      value: 0,
    }
  },
  methods: {
    cambio_width: function(e) {
      const {target} = e;
      console.log(target);
      console.log(target.value);
      console.log(this.size_x);
      let canvas = document.getElementById('myCanvas');
      canvas.width = this.size_x;
    },
    cambio_height: function(e) {
      console.log("cambio");
      console.log(e);
      const {target} = e;
      console.log(target);
      console.log(target.value);
      console.log(this.size_y);
      let canvas = document.getElementById('myCanvas');
      canvas.height = this.size_y;
    },
    click_origin: function (e) {
      function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log("x: " + x + " y: " + y);
        return {x, y}
      }

      let canvas = document.getElementById("myCanvas");
      // const canvas = document.querySelector('myCanvas');
      // canvas.addEventListener('mousedown', function(e) {
      const {x, y} = getCursorPosition(canvas, e);
      this.origin_x = x;
      this.origin_y = y;
      this.brush = newBrush(this.fibonacci_n, {x: Number(this.origin_x), y: Number(this.origin_y)}, this.stroke_size)

    },
    manual: function() {
      this.fibonacci_string = this.brush.fibonacci_string;
      for (let i=0; i < this.steps_to_draw; i++) {
        step(this.vueCanvas, this.brush)
      }
    },
    step: function () {
      // const fibonacci_string = fibonacciWord(Number(this.message));
      // this.message = this.message.split('').reverse().join('')
      // step(this.vueCanvas, this.brush)
      if (this.running) {
        clearInterval(this.fractalsIntervalId);
        this.running = false;
        this.start_text = 'Start';
        this.fibonacci_string = this.brush.fibonacci_string;
      } else {
        this.brush = newBrush(this.fibonacci_n, {x: Number(this.origin_x), y: Number(this.origin_y)}, this.stroke_size);
        let canvas = document.getElementById('myCanvas');
        canvas.width = 0;
        canvas.width = 2000;
        this.vueCanvas.beginPath();
        this.fibonacci_string = this.brush.fibonacci_string;
        this.fractalsIntervalId = setInterval(()=> {
          step(this.vueCanvas, this.brush)
          // console.log(this.brush.fibonacci_string.length)
          // console.log(this.brush.i)
          if (this.brush.fibonacci_string.length < this.brush.i) {
            this.start_text = 'Start';
            this.running = false;
            clearInterval(this.fractalsIntervalId);
          }
        }, 25)
        this.running = true;
        this.start_text = 'STOP';
      }
    },
    reset: function () {
      this.brush = newBrush(this.fibonacci_n, {x: Number(this.origin_x), y: Number(this.origin_y)}, Number(this.stroke_size));
      console.log(this.stroke_size);
      var canvas = document.getElementById('myCanvas');
      canvas.width = 0;
      canvas.width = 2000;
      console.log("===============");
    }
  },
  mounted() {
    // }, 1000)
    console.log("Mounted");
    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");
    this.fractalsIntervalId = null;
    this.running = false
    this.brush = newBrush(this.fibonacci_n, {x: Number(this.origin_x), y: Number(this.origin_y)}, this.stroke_size);
    this.fibonacci_string = this.brush.fibonacci_string;
    this.vueCanvas = ctx;
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
  height: 800px;
}

.header {
  grid-column: 1 / 2;
  overflow-y: auto;
}

.main {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  overflow: auto;
}

.sidebar {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.config-item {
  display: flex;
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

