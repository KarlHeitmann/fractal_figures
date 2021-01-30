<template>
  <div class="layout">
    <div class="header">
      <h1>{{ msg }}</h1>
      <p>{{ message }}</p>
    </div>
    <div class="sidebar">
      <vue-slider v-model="value" />
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
      <button v-on:click="step">Reverse Message</button>
    </div>
    <div class="main">
      <canvas
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
  step,
  fibonacciWord,
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
    step: function () {
      // const fibonacci_string = fibonacciWord(Number(this.message));
      // this.message = this.message.split('').reverse().join('')
      console.log(this.vueCanvas);
      console.log(this.brush);
      // step(this.vueCanvas, this.brush)
      if (this.running) {
        clearInterval(this.fractalsIntervalId);
        this.running = false;
      } else {
        this.fractalsIntervalId = setInterval(()=> {
          console.log("Fractals");
          step(this.vueCanvas, this.brush)
        }, 100)
        this.running = true;
      }
    }
  },
  mounted() {
    // }, 1000)
    console.log("Mounted");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    this.fractalsIntervalId = null;
    this.running = false
    this.brush = {
      fibonacci_string: fibonacciWord(15),
      step: 10,
      x: 50,
      y: 85,
      y_next: 85,
      x_next: 50,
      i: 0,
      direction: 'w',
    };
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

.layout {
  display: grid;
  /* grid-template-columns: 1fr 35rem; */
  /* grid-template-columns: 50rem 35rem; */
  grid-template-columns: 80vw 20vw;
  grid-template-rows: 15rem 1fr;
}

.header {
  grid-column: 1 / 2;
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
</style>

