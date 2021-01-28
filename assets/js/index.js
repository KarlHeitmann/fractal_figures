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

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
