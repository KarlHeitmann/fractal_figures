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
import fibonacci_word from '../fractals/fibonacci_word';
const fibonacci_string = fibonacci_word(15);
console.log(fibonacci_string);

const inteligencia = {
  'w': {
    0: 'n',
    1: 's'
  },
  'n': {
    0: 'e',
    1: 'w'
  },
  'e': {
    0: 's',
    1: 'n'
  },
  's': {
    0: 'w',
    1: 'e'
  },
}

console.log(inteligencia);
function run(ctx) {
/*
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  */

  let direction = 'w';
  let i = 0;
  const STEP = 1;
  let x = 50;
  let y = 85;
  let x_step, y_step;

  fibonacci_string.split('').forEach(paso => {
    x_step = x
    y_step = y
    if (direction == 'w') {
      x_step += STEP;
    } else if (direction == 'e') {
      x_step -= STEP;
    } else if (direction == 'n') {
      y_step += STEP;
    } else if (direction == 's') {
      y_step -= STEP;
    }
    ctx.moveTo(x, y);
    ctx.lineTo(x_step, y_step);
    ctx.stroke();
    if (paso == '0') {
      direction = inteligencia[direction][i % 2]
    }
    x = x_step
    y = y_step
    i +=1
    // # puts i
  });
}
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
      run(this.vueCanvas);
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

