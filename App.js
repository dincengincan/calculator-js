const buttons = document.querySelector(".container");
const screen = document.querySelector(".screen");

let firstNumber = "";
let calculation = "";

buttons.addEventListener("click", function(event) {
  if (
    event.target.className === "button number" ||
    event.target.className === "button zero number"
  )
    display(event);
  event.target.className === "button plus" && calculate("plus");
  event.target.className === "button minus" && calculate("minus");
  event.target.className === "button divide" && calculate("divide");
  event.target.className === "button multiply" && calculate("multiply");
  event.target.className === "button equals" && equals();
  event.target.className === "button backspace" && backspace();
  event.target.className === "button clear" && clear();
  event.stopPropagation();
});

function display(event) {
  if (screen.innerText > 0) {
    //if there is already a number, put next one next to it.
    let totalResult = screen.innerText + event.target.innerText;
    //limit the character length
    let limitedResult = totalResult.substring(0, 16);
    screen.innerText = limitedResult;
  } else {
    screen.innerText = event.target.innerText;
  }
}

function clear() {
  screen.innerText = 0;
}

function backspace() {
  let newResult = screen.innerText.substring(0, screen.innerText.length - 1);
  if (newResult.length === 0) {
    resscreenult.innerText = 0;
  } else {
    screen.innerText = newResult;
  }
}

function equals() {
  let secondNumber = parseInt(screen.innerText);
  if (calculation === "plus") {
    screen.innerText = firstNumber + secondNumber;
  } else if (calculation === "minus") {
    screen.innerText = firstNumber - secondNumber;
  } else if (calculation === "multiply") {
    screen.innerText = (firstNumber * secondNumber).toString().substring(0, 16);
  } else if (calculation === "divide") {
    screen.innerText = (firstNumber / secondNumber).toString().substring(0, 16);
  }
}

function calculate(type) {
  firstNumber = parseInt(screen.innerText);
  screen.innerText = 0;
  calculation = type;
}
