/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 
let num2 
let operator = null
let total
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll('.button');
const divideButtonElement = document.querySelector('#divide');
const multiplyButtonElement = document.querySelector('#multiply');
const minusButtonElement = document.querySelector('#minus');
const addButtonElement = document.querySelector('#add');
const totalButtonElement = document.querySelector('#total');
const clearButtonElement = document.querySelector('#clear');
const displayButtonElement = document.querySelector('.display');

/*-------------------------------- Functions --------------------------------*/
const divide = ()=> {
  if (num1 !== undefined && operator === "/" && num2 !== undefined) {
    total = num1 / num2
    console.log ("total " + total)
    
    displayButtonElement.textContent = total

    
  }
}

const multiply = ()=> {
  if (num1 !== undefined && operator === "*" && num2 !== undefined) {
    total = num1 * num2
    console.log ("total " + total)
    displayButtonElement.textContent = total

  }
}

const minus = ()=> {
  if (num1 !== undefined && operator === "-" && num2 !== undefined) {
    total = num1 - num2
    console.log ("total " + total)
    displayButtonElement.textContent = total

  }
}

const add = ()=> {
  if (num1 !== undefined && operator === "+" && num2 !== undefined) {
    total = num1 + num2
    console.log ("total " + total)
    displayButtonElement.textContent = total

  }
}

const clear = ()=> {
  num1 = undefined
  num2 = undefined
  operator = null
  total = undefined
  displayButtonElement.textContent = ""

}





/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);
    // Example
    if (event.target.classList.contains('number')) {
        if (num1 === undefined && operator === null) {
          num1 = Number(event.target.innerText)
          console.log("num1 "+ num1)
          displayButtonElement.textContent = num1
        }
       else if (num2 === undefined && operator !== null) {
          num2 = Number(event.target.innerText)
          console.log("num2 "+num2)
          displayButtonElement.textContent = num2

        }
    }
  
   // Example
    if (event.target.innerText === '*') {
      if (num1 !== undefined && operator === null) {
        operator = event.target.innerText
        console.log("operator "+operator)
        displayButtonElement.textContent = "*"

      }
    }
    if (event.target.innerText === '/') {
      if (num1 !== undefined && operator === null) {
        operator = event.target.innerText
        console.log("operator "+operator)
        displayButtonElement.textContent = "/"

      }
    }
    if (event.target.innerText === '-') {
      if (num1 !== undefined && operator === null) {
        operator = event.target.innerText
        console.log("operator "+operator)
        displayButtonElement.textContent = "-"

      }
    }
    if (event.target.innerText === '+') {
      if (num1 !== undefined && operator === null) {
        operator = event.target.innerText
        console.log("operator "+operator)
        displayButtonElement.textContent = "+"

      }
    }

    if(event.target.innerText === '=')
    {
      divide()
      multiply()
      minus()
      add()
      
    }
    
    if(event.target.innerText === 'C')
      {
        clear()
      }
    
  });
  
  });
  


  