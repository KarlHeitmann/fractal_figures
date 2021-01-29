function fibonacciWord(n) {
  if (n == 0) {
    return '0'
  } else if (n == 1) {
    return '01'
  } else {
    return fibonacciWord(n - 1) + fibonacciWord(n - 2)
  }
}

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

function run(fibo_n, ctx) {
  let direction = 'w';
  let i = 0;
  const STEP = 1;
  let x = 50;
  let y = 85;
  let x_step, y_step;
  const fibonacci_string = fibonacciWord(fibo_n);
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
export {
  run,
  fibonacciWord,
  inteligencia
};
