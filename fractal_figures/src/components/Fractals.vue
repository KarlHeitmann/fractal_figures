<template>
  <div id="layout">
    <Header
    v-bind:msg="msg"
    v-bind:fibonacci_n="fibonacci_n"
    v-bind:fibonacci_string="fibonacci_string"
    @messageFromChild="childMessageReceived"
    />
    <Sidebar
      @messageFromChild="sidebarMessageReceived"
      v-bind:vueCanvas="vueCanvas"
    />
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
import Header from './Header'
import Sidebar from './Sidebar'
import 'vue-slider-component/theme/default.css'
import {
  //run,
  Brush,
} from '../fractals/fibonacci_word';

const ORIGIN_X = 50;
const ORIGIN_Y = 85;

export default {
  name: 'Fractals',
  components: {
    Header,
    Sidebar,
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
      brush2: null,
      vueCanvas: null,
    }
  },
  methods: {
    cambio_width: function(e) {
      const {target} = e;
      let canvas = document.getElementById('myCanvas');
      canvas.width = this.size_x;
    },
    cambio_height: function(e) {
      const {target} = e;
      let canvas = document.getElementById('myCanvas');
      canvas.height = this.size_y;
    },
    click_origin: function (e) {
      function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return {x, y}
      }

      let canvas = document.getElementById("myCanvas");
      const {x, y} = getCursorPosition(canvas, e);
      this.origin_x = x;
      this.origin_y = y;

    },
    sidebarMessageReceived: function(arg1, arg2) {
      if (arg1 == 'auto') {
        console.log('auto');
        if (this.running) {
          clearInterval(this.fractalsIntervalId);
          this.running = false;
          this.start_text = 'Start';
        } else {
          let canvas = document.getElementById('myCanvas');
          canvas.width = 0;
          canvas.width = 2000;
          this.vueCanvas.beginPath();
          // this.fibonacci_string = this.brush.fibonacci_string;
          // this.fractalsIntervalId = setInterval(()=> {
          //   // step(this.vueCanvas, this.brush)
          //   if (this.brush.fibonacci_string.length < this.brush.i) {
          //     this.start_text = 'Start';
          //     this.running = false;
          //     clearInterval(this.fractalsIntervalId);
          //   }
          // }, 25)
          this.running = true;
          this.start_text = 'STOP';
        }
      } else if (arg1 == 'reset') {
        // this.brush = arg2;
        console.log("::::::::::::::::::");
        console.log(this.stroke_size);
        var canvas = document.getElementById('myCanvas');
        canvas.width = 0;
        canvas.width = 2000;
        console.log("===============");
      } else if (arg1 == 'steps_to_draw') {
        this.steps_to_draw = arg2;
      }
    },
    childMessageReceived: function(arg1) {
      console.log("WOW", arg1);
    },
  },
  mounted() {
    // }, 1000)
    console.log("Mounted");
    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");
    this.fractalsIntervalId = null;
    this.running = false
    // this.brush = newBrush(this.fibonacci_n, {x: Number(this.origin_x), y: Number(this.origin_y)}, this.stroke_size);
    // this.fibonacci_string = this.brush.fibonacci_string;
    this.vueCanvas = ctx;
    this.brush2 = new Brush(15, 5, 200, 340);
    // this.brush2 = new Brush(15, 10, 50, 85);
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

.main {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  overflow: auto;
}

#myCanvas {
    border: 3px solid black;
    /*
    height: 0px;
    width: 100px
    */
    width: 100%;
}
</style>

