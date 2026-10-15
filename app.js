let firstNum = "";
let secondNum = "";
let selectedOperator = "";

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

// select the display div and store it in display variable
const display = document.querySelector(".display");

// select all digit buttons and add an event listener that adds their value to firstNum if operator hasnt been pressed yet and secondNum if it has"
const digits = document.querySelectorAll(".digit");
for (const digit of digits){
    digit.addEventListener("click", (e) => {
        if(selectedOperator === ""){
            firstNum += e.target.textContent;
            console.log(firstNum);
            updateDisplay();
        } else{
            secondNum += e.target.textContent;
            console.log(secondNum);
            updateDisplay();
        }
    })
}
// select the operator buttons and assign it to a variable named operators
const operators = document.querySelectorAll(".operator");
// loop through operators nodelist and add an eventListener that sets the operator variable to its value
for (const operator of operators){
    operator.addEventListener("click", (e) => {
        selectedOperator = e.target.textContent;
        console.log(selectedOperator);
        updateDisplay(selectedOperator);
    })
}
// update the display 
function updateDisplay() {
    // if only fNum has a value display only fnum
    // if fNum and selectedOperator have a value display them both
    // if fNum, selected Operator and secondNum have a value display all
    display.textContent = firstNum + " " + selectedOperator + " " + secondNum;

}

