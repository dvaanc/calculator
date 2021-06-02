const calculator = document.querySelector('.calculator')
const buttonEl = document.querySelector('.button')

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;

const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return addition(a, b);

    case "-":
      return subtraction(a, b);

    case "x":
     return multiply(a, b);

    case "÷":
      return b === 0 ? Null : divide(a, b);

    case "%":
      return modulo(a, b);

    default: 
      return null;
  }
}
