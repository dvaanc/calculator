
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

let val1;
let val2;
let operation;
let keyType;
let checkOperation = false;

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
      if (output.textContent === "0" || checkOperation === true) screenReset();
      output.textContent += content;
      }
      if(action === 'decimal') { 
        output.textContent = display + ".";
      }
      if(action === 'pos/neg') {
      
      }
      if(action === 'all-clear') {
        output.textContent = "0";
        val1 = "";
        val2 = "";
        console.log(val1, val2);
        checkOperation = false;
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
          checkOperation = true;
          operation = content;
          val1 = display;
          console.log(val1, operation);
        }

        if (action === 'equal') {
          val2 = display;
          checkOperation = true;
          output.textContent = operate(operation, val1, val2);
          console.log(operate(operation, val1, val2));
        }
  }
})

const screenReset = function () {
  output.textContent = "";
  checkOperation = false;
}

console.log("hello")
