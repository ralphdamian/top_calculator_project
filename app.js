let firstNum = "";
let secondNum = "";
let operator = "";

// add two numbers
function add(a, b) {
    return a + b;
}

// subtract 2 numbers
function subtract(a, b) {
    return a - b;
}

// multiply 2 numbers
function multiply(a, b) {
    return a * b;
}

// divide 2 numbers
function divide(a, b) {
    return a / b;
}

// take operator and call operation based on operator, passing in 2 numbers
function operate(fNum, sNum, operator) {
    switch (operator) {
        case "+":
            return add(fNum, sNum);
        case "-":
            return subtract(fNum, sNum);
        case "*":
            return multiply(fNum, sNum);
        case "/":
            return divide(fNum, sNum);
        default:
            return "ERROR: AN INCORRECT OPERATOR WAS USED!"
    }
}
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
for (const digit of digits){
    digit.addEventListener("click", (e) => {
        if(operator === ""){
            firstNum += e.target.textContent;
            console.log(firstNum);
            updateDisplay(firstNum);
        } else{
            secondNum += e.target.textContent;
            console.log(secondNum);
            updateDisplay(secondNum);
        }
    })
}

function updateDisplay(text) {
    display.textContent = text;

}

