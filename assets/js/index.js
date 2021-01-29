function fibonacci_word(n) {
  if (n == 0) {
    return '0'
  } else if (n == 1) {
    return '01'
  } else {
    return fibonacci_word(n - 1) + fibonacci_word(n - 2)
  }
}

const fibonacci_string = fibonacci_word(10);
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

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

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
  if (paso == '0') {
    direction = inteligencia[direction][i % 2]
  }
  x = x_step
  y = y_step
  i +=1
  // # puts i
});

