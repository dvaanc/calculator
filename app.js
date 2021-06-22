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

let firstOperand = null;
let secondOperand = null;
let operator = null;
let keyType;
let waitingForSecondOperand = false;
let checkOperator = false;

 keys.addEventListener("click", e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const content = key.textContent
    const display = output.textContent
      if(!action) { 
        if (waitingForSecondOperand === true) {
          output.textContent = content;
          waitingForSecondOperand = false;
        } else {
        display === '0' ? output.textContent = content : output.textContent =  display + content;
          }
        }
      if(action === 'decimal' && !display.includes('.')) { 
        output.textContent = display + '.';
      }
      if(action === 'pos/neg') {
        if(display.includes('-')) {
          output.textContent = display.toString().substring(1, display.length);
        } else {
        output.textContent = '-' + display;
        }
      }
      if(action === 'all-clear') {
        output.textContent = "0";
        firstOperand = null;
        secondOperand = null;
        waitingForSecondOperand = false;
        checkOperator = false;
        operator = null;
        console.log(waitingForSecondOperand, firstOperand, secondOperand);
        
      }
      if(action === "delete") {
        output.textContent = display.toString().slice(0, -1);
      }
        if(
          action === 'addition' ||
          action === 'subtraction' ||
          action === 'multiply' ||
          action === 'divide' ||
          action === 'modulo' 
        ) {

          
          if (operator !== null) {
            secondOperand = display;
            console.log(firstOperand, operator, secondOperand, waitingForSecondOperand, checkOperator);
            checkOperator = false;
            output.textContent = operate(operator, firstOperand, secondOperand);
          }
          waitingForSecondOperand = true;
          operator = content;
          checkOperator = true;
          firstOperand = display;
          console.log(firstOperand, operator, secondOperand, waitingForSecondOperand, checkOperator);
          
        }

        if (action === 'equal') {
          secondOperand = display;
          output.textContent = operate(operator, firstOperand, secondOperand);
          operator = null;
          console.log(operate(operator, firstOperand, secondOperand));
        }
  }
})


console.log("hello")
