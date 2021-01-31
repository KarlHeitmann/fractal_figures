<template>
  <div class="sidebar">
    <div class="config-item">
      <label>Fibonacci_n:</label>
      <input
        v-model="fibonacci_n"
        @change="change_fibonacci_n"
        placeholder="Fibonacci n">
    </div>
    <vue-slider v-model="fibonacci_n" />
    <div class="config-item">
      <label>Stroke size:</label>
      <input
        v-model="stroke_size"
        @change="change_stroke_size"
        placeholder="Stroke size">
    </div>
    <div class="config-item">
      <label>Steps to draw:</label>
      <input
        v-model="steps_to_draw"
        @change="change_steps_to_draw"
        placeholder="Steps to draw">
    </div>
    <div class="config-item">
      <label>Origin X:</label>
      <input
        v-model="origin_x"
        @change="change_origin_x"
        placeholder="Origin X">
    </div>
    <div class="config-item">
      <label>Origin Y:</label>
      <input
        v-model="origin_y"
        @change="change_origin_y"
        placeholder="Origin Y">
    </div>
    <div class="config-item"><label>Manual:</label>
      <button v-on:click="manual">Manual</button>
    </div>
    <div class="config-item"><label>Auto:</label>
      <button v-on:click="auto">{{ start_text }}</button>
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
</template>

<script>
const ORIGIN_X = 50;
const ORIGIN_Y = 85;

import VueSlider from 'vue-slider-component'
import {
  //run,
  Brush,
} from '../fractals/fibonacci_word';

export default {
  name: 'Sidebar',
  props: {
    vueCanvas: Object,
  },
  components: {
    VueSlider,
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
    auto() {
      console.log("AUTO");
      console.log(this.vueCanvas)

      if (this.running) {
        clearInterval(this.fractalsIntervalId);
        this.running = false;
        this.start_text = 'Start';
      } else {
        // let canvas = document.getElementById('myCanvas');
        // canvas.width = 0;
        // canvas.width = 2000;
        // this.vueCanvas.beginPath();
        // this.fibonacci_string = this.brush.fibonacci_string;
        this.fractalsIntervalId = setInterval(()=> {
          // step(this.vueCanvas, this.brush)
          this.brush2.step(this.vueCanvas);
          console.log(this.brush2.i)
          if (this.brush2.fibonacci_string.length < this.brush2.i) {
            this.start_text = 'Start';
            this.running = false;
            clearInterval(this.fractalsIntervalId);
          }
        }, 25)
        this.running = true;
        this.start_text = 'STOP';
      }
      // this.$emit('messageFromChild', 'auto', this.brush);
      // this.$emit('messageFromChild', 'click');
    },
    manual() {
      console.log("MANUAL");
      console.log(this.brush2);
      console.log(this.vueCanvas)
      for (let i=0; i < this.steps_to_draw; i++) {
        this.brush2.step(this.vueCanvas);
      }
    },
    reset() {
      console.log("RESET");
      this.brush2.Reset()
      this.$emit('messageFromChild', 'reset', this.brush2);
    },
    change_stroke_size() {
      this.brush2.setStrokeSize(this.stroke_size);
    },
    change_steps_to_draw() {
      this.$emit('messageFromChild', 'steps_to_draw', Number(this.steps_to_draw));
    },
    change_origin_x() {
      this.brush2.setOriginX(this.origin_x)
    },
    change_origin_y() {
      this.brush2.setOriginY(this.origin_y)
    },
    change_fibonacci_n() {
      this.brush2.resetFibonacciN(this.fibonacci_n)
    }
  },
  mounted() {
    console.log("SIDEBAR mounted");
    this.brush2 = new Brush(15, 5, 200, 340);
    this.running = false
  }
}
</script>

<style scoped>
  .config-item {
    display: flex;
  }

  .sidebar {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

</style>
