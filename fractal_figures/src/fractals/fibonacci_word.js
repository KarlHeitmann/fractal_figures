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
    this.x_origin = x;
    this.y_origin = y;
    this.current_fibo = 1;
    this.previous_fibo = 1;
    this.i = 0;
    this.direction = 'w';
    this.colours = ['red', 'blue', 'green', 'crimson', 'dark']
    this.current_color = 0;
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
  resetFibonacciN(fibonacci_n) {
    this.fibonacci_string = this.fibonacciWord2(fibonacci_n);
    this.i = 0;
  }
  Reset() {
    this.x = this.x_origin;
    this.y = this.y_origin;
    this.x_next = this.x_origin;
    this.y_next = this.y_origin;
    this.i = 0
    this.current_fibo = 1;
    this.previous_fibo = 1;
  }

  setOriginAndReset(x, y) {
    this.setOrigin(x, y);
    this.Reset()
  }

  setOriginX(x) {
    this.x_origin = Number(x);
  }

  setOriginY(y) {
    this.y_origin = Number(y);
  }

  setOrigin(x, y) {
    this.x_origin = x;
    this.y_origin = y;
  }

  setStrokeSize(stroke_size) {
    console.log(stroke_size)
    this.stroke_size = Number(stroke_size);
  }

  fibonacciWord2(n) {
    if (n == 0) {
      return '0'
      // return '1'
    } else if (n == 1) {
      return '01'
      // return '10'
      // return '101'
      // return '101'
    } else {
      return this.fibonacciWord2(n - 1) + this.fibonacciWord2(n - 2)
    }
  }

  calculateStroke() {
    if (this.direction == 'w') {
      this.x_next += this.stroke_size;
    } else if (this.direction == 'e') {
      this.x_next -= this.stroke_size;
    } else if (this.direction == 'n') {
      this.y_next += this.stroke_size;
    } else if (this.direction == 's') {
      this.y_next -= this.stroke_size;
    }
  }

  step(ctx) {
    this.calculateStroke()
    if (this.i >= (this.current_fibo + this.previous_fibo)){
      // ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.strokeStyle = this.colours[this.current_color % 5];
      this.current_color += 1;
      const tmp_current_fib = this.previous_fibo + this.current_fibo;
      this.previous_fibo = this.current_fibo;
      this.current_fibo = tmp_current_fib;
      // ctx.strokeStyle = "red";
    }

    // console.log(this.x, this.y, this.x_next, this.y_next);
    // console.log(this.x);
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x_next, this.y_next);
    ctx.stroke();

    if (this.fibonacci_string[this.i] == '0') {
      this.direction = this.inteligencia[this.direction][this.i % 2];
    }

    this.i += 1;
    this.x = this.x_next;
    this.y = this.y_next;
  }
}

export {
  Brush,
};
