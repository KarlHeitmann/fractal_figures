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

// const brush = {
//   step: 1,
//   x: 50,
//   y: 85,
//   x_next: 50,
//   y_next: 85
// }

function run(fibo_n, ctx, brush) {
  let direction = 'w';
  let i = 0;
  const STEP = 1;
  const fibonacci_string = fibonacciWord(fibo_n);
  console.log(brush)
  fibonacci_string.split('').forEach(paso => {
    brush.x_step = brush.x
    brush.y_step = brush.y
    if (direction == 'w') {
      brush.x_step += STEP;
    } else if (direction == 'e') {
      brush.x_step -= STEP;
    } else if (direction == 'n') {
      brush.y_step += STEP;
    } else if (direction == 's') {
      brush.y_step -= STEP;
    }
    ctx.moveTo(brush.x, brush.y);
    ctx.lineTo(brush.x_step, brush.y_step);
    ctx.stroke();
    if (paso == '0') {
      direction = inteligencia[direction][i % 2]
    }
    brush.x = brush.x_step
    brush.y = brush.y_step
    i +=1
    // # puts i
  });
}
export {
  run,
  fibonacciWord,
  inteligencia
};
