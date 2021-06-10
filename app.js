# calculator-

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.layout');
const output = document.querySelector('.output');
// const allClearEl = document.querySelector('[data-action="all-clear"]');
// const posNegEl = document.querySelector('[data-action="pos/neg"]');
// const moduloEl = document.querySelector('[data-action="modulo"]');
// const divideEl = document.querySelector('[data-action="divide"]');
// const muliplyEl = document.querySelector('[data-action="multiply"]');
// const subtractionEl = document.querySelector('[data-action="subtraction"]');
// const additionEl = document.querySelector('[data-action="addition"]');
// const floatingPointEl = document.querySelector('[data-action="floating-point"]');
// const deleteEl = document.querySelector('[data-action="delete"]');
// const equal = document.querySelector('[data-action="equal"]');
// const operationsEl = document.querySelectorAll('[data-action]')

const reset = 0;

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
    return b === 0 ? Null : divide(a, b);

  case "%":
    return modulo(a, b);

  default: 
    return null;
  }
}

keys.addEventListener("click", e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const content = key.textContent
    const display = output.textContent
      if(!action) { 
        display === '0' ? output.textContent = content : output.textContent = display + content ;
      }
      if(action === 'decimal') { 
          output.textContent = display + ".";
      }
      // if(
      //   action === 'add' ||
      //   action === 'subtraction' ||
      //   action === 'multiply' ||
      //   action === 'divide' ||
      //   action === 'modulo' 
      // ) {
      //   key.classList.add('is-depressed');
      //   calculator.dataset.previousKeyType = 'operator'
      // }
      // Array.from(key.parentNode.children).forEach(k => k.classlist.remove('is-depressed'))
  }
})



// let displayValue;
//  const display = function() {
//   numberEl.forEach(button => {
//     button.addEventListener("click", e => {
//        displayValue = e.target.textContent;
//         outputEl.textContent += displayValue;
//     });
//   });
// }

// const operations = function() {
//   operationsEl.forEach(operation => {
//     operation.addEventListener("click", e => {
//       switch (e) {

//       };
//     });
//   });
// }


console.log("hello")






