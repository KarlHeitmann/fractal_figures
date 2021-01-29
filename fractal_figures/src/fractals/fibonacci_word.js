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

export {
  fibonacciWord,
  inteligencia
};
