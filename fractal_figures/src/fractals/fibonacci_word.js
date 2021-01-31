function fibonacciWord(n) {
  if (n == 0) {
    // return '0'
    return '1'
  } else if (n == 1) {
    // return '01'
    return '10'
  } else {
    return fibonacciWord(n - 1) + fibonacciWord(n - 2)
  }
}

class Brush {
  constructor(
    fibonacci_n,
    stroke_size,
    x, y,
  ) {
    this.fibonacci_string = this.fibonacciWord2(fibonacci_n);
    this.stroke_size = stroke_size;
    this.x = x;
    this.y = y;
    this.x_next = x;
    this.y_next = y;
    this.current_fibo = 1;
    this.previous_fibo = 1;
    this.i = 0;
    this.direction = 'w';
    this.colours = ['red', 'blue', 'green', 'crimson', 'dark']
    this.inteligencia = {
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
  }

  fibonacciWord2(n) {
    if (n == 0) {
      // return '0'
      return '1'
    } else if (n == 1) {
      // return '01'
      return '10'
    } else {
      return this.fibonacciWord2(n - 1) + this.fibonacciWord2(n - 2)
    }
  }

  calculateStroke() {
    if (this.direction == 'w') {
      this.x_next += this.step;
    } else if (this.direction == 'e') {
      this.x_next -= this.step;
    } else if (this.direction == 'n') {
      this.y_next += this.step;
    } else if (this.direction == 's') {
      this.y_next -= this.step;
    }
  }

  step(ctx) {
    this.calculateStroke()
    if (this.i >= (this.current_fibo + this.previous_fibo)){
      // ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.strokeStyle = colours[this.current_color % 5];
      this.current_color += 1;
      const tmp_current_fib = this.previous_fibo + this.current_fibo;
      this.previous_fibo = this.current_fibo;
      this.current_fibo = tmp_current_fib;
      // ctx.strokeStyle = "red";
    }

    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x_next, this.y_next);
    ctx.stroke();

    if (this.fibonacci_string[this.i] == '0') {
      this.direction = inteligencia[this.direction][this.i % 2];
    }

    this.i += 1;
    this.x = this.x_next;
    this.y = this.y_next;
  }
}

function newBrush(fibonacci_n, origin, stroke_size) {
  const {x, y} = origin;
  console.log(stroke_size);
  return {
    fibonacci_string: fibonacciWord(fibonacci_n),
    step: stroke_size,
    x,
    y,
    x_next: x,
    y_next: y,
    current_fibo: 1,
    previous_fibo: 1,
    current_color: 0,
    i: 0,
    direction: 'w',
  };
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

const colours = ['red', 'blue', 'green', 'crimson', 'dark']

function step(ctx, brush) {
  const {step} = brush;

  if (brush.direction == 'w') {
    brush.x_next += step;
  } else if (brush.direction == 'e') {
    brush.x_next -= step;
  } else if (brush.direction == 'n') {
    brush.y_next += step;
  } else if (brush.direction == 's') {
    brush.y_next -= step;
  }

  if (brush.i >= (brush.current_fibo + brush.previous_fibo)){
    // ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.strokeStyle = colours[brush.current_color % 5];
    brush.current_color += 1;
    const tmp_current_fib = brush.previous_fibo + brush.current_fibo;
    brush.previous_fibo = brush.current_fibo;
    brush.current_fibo = tmp_current_fib;

    // ctx.strokeStyle = "red";
  }

  ctx.moveTo(brush.x, brush.y);
  ctx.lineTo(brush.x_next, brush.y_next);
  ctx.stroke();

  if (brush.fibonacci_string[brush.i] == '0') {
    brush.direction = inteligencia[brush.direction][brush.i % 2];
  }

  brush.i += 1;
  brush.x = brush.x_next;
  brush.y = brush.y_next;
}

function run(fibo_n, ctx, brush) {
  let direction = 'w';
  let i = 0;
  const STEP = 1;
  const fibonacci_string = fibonacciWord(fibo_n);
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
  step,
  newBrush,
  Brush,
  inteligencia
};
