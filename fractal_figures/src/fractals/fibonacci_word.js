function fibonacci_word(n) {
  if (n == 0) {
    return '0'
  } else if (n == 1) {
    return '01'
  } else {
    return fibonacci_word(n - 1) + fibonacci_word(n - 2)
  }
}

export default fibonacci_word;
