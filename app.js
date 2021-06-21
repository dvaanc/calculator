
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.layout');
const output = document.querySelector('.output');

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;

const operate = function(operator, a, b) {
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
    return b === 0 ? "Null, dividing by 0!" : divide(a, b);

  case "%":
    return modulo(a, b);

  default: 
    return null;
  }
}

let firstOperand;
let secondOperand;
let operator;
let keyType;
let waitingForSecondOperand = false;
let checkOperator = false;

 keys.addEventListener("click", e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const content = key.textContent
    const display = output.textContent
      // if(!action) { 
      //   display === '0' || checkOperation === true ? output.textContent = content : output.textContent = display + content;
      // }
      if(!action) { 
        if (waitingForSecondOperand === true) {
          output.textContent = content;
          waitingForSecondOperand = false;
        } else {
        display === '0' ? output.textContent = content : output.textContent =  display + content;
          }
        }
      if(action === 'decimal' && !display.includes('.')) { 
        output.textContent = display + ".";
      }
      if(action === 'pos/neg') {
      
      }
      if(action === 'all-clear') {
        output.textContent = "0";
        firstOperand = "";
        secondOperand = "";
        console.log(firstOperand, secondOperand);
        waitingForSecondOperand = false;
      }
      if(action === "delete") {
        output.textContent = output.textContent.toString().slice(0, -1);
      }
        if(
          action === 'addition' ||
          action === 'subtraction' ||
          action === 'multiply' ||
          action === 'divide' ||
          action === 'modulo' 
        ) {
          waitingForSecondOperand = true;
          operator = content;
          firstOperand = display;
          console.log(firstOperand, operator);
        }

        if (action === 'equal') {
          secondOperand = display;
          
          output.textContent = operate(operator, firstOperand, secondOperand);
          operator = '';
          console.log(operate(operator, firstOperand, secondOperand));
        }
  }
})

const screenReset = function() {
  output.textContent = "";
  checkOperator = false;
}

console.log("hello")
