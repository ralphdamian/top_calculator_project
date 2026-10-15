let firstNum = "";
let secondNum = "";
let selectedOperator = "";
let lastButtonPressed = "";

// add two numbers
function add(a, b) {
    return Number(a) + Number(b);
}

// subtract 2 numbers
function subtract(a, b) {
    return Number(a) - Number(b);
}

// multiply 2 numbers
function multiply(a, b) {
    return Number(a) * Number(b);
}

// divide 2 numbers
function divide(a, b) {
    if (Number(b) === 0) {
        return "ERROR: YOU CANNOT DIVIDE BY 0"
    }
    return Number(a) / Number(b);
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
// function to clear the display and all variables
function clear(){
    firstNum = "";
    secondNum = "";
    selectedOperator = "";
    lastButtonPressed = "";
    updateDisplay();

}

// select the display div and store it in display variable
const display = document.querySelector(".display");

// select all digit buttons and add an event listener that adds their value to firstNum if operator hasnt been pressed yet and secondNum if it has"
const digits = document.querySelectorAll(".digit");
console.table(digits);
for (const digit of digits){
    digit.addEventListener("click", (e) => {
        
        // if the last button pressed was equals then set firstNum to value
        if(lastButtonPressed === "=") { 
            firstNum = e.target.textContent;
            lastButtonPressed = e.target.textContent;
            updateDisplay();
        
        // if operator buttong has not been pressed set firstNum to value
        } else if(selectedOperator === ""){
            firstNum += e.target.textContent;
            console.log(firstNum);
            lastButtonPressed = e.target.textContent;
            updateDisplay();

        // if the operator has already been clicked set secondNum to the value of the pressed digit
        } else{
            secondNum += e.target.textContent;
            console.log(secondNum);
            lastButtonPressed = e.target.textContent;
            updateDisplay();
        }
    })
}
// select the operator buttons and assign it to a variable named operators
const operators = document.querySelectorAll(".operator");
// loop through operators nodelist and add an eventListener that sets the operator variable to its value
for (const operator of operators){
    operator.addEventListener("click", (e) => {
        // if selected operator is empty then set the selectedOperator to the clicked operator
        if(!selectedOperator){
            selectedOperator = e.target.textContent;
            lastButtonPressed = e.target.textContent;
            console.log(selectedOperator);
            updateDisplay(selectedOperator);
        // if secondNum is empty then the last thing entered was not an operator so set operator to current selection
        } else if (!secondNum){
            selectedOperator = e.target.textContent;
            lastButtonPressed = e.target.textContent;
            console.log(selectedOperator);
            updateDisplay(selectedOperator);
        }
        // if an operator is clicked and the last button pressed was a digit call operate and set up for next operation
        else {
            firstNum = operate(firstNum, secondNum, selectedOperator);
            secondNum = "";
            selectedOperator = "";
            selectedOperator = e.target.textContent;
            lastButtonPressed = e.target.textContent;
            console.log(selectedOperator);
            updateDisplay();

        }
    })
}
// select the equals button and assign it to a variable named equalsButton
const equalsButton = document.querySelector("#equals");
// add an event listener that calls operate on click
equalsButton.addEventListener("click", (e)=> {
    firstNum = operate(firstNum, secondNum, selectedOperator);
    secondNum = "";
    selectedOperator = "";
    lastButtonPressed = e.target.textContent;
    updateDisplay();

})

// select the clear button and assign it to a variable named clearButton
const clearButton = document.querySelector("#clear");
// add an event listener that calls clear on click
clearButton.addEventListener("click", () => clear());

// update the display 
function updateDisplay() {
    // set the displays text content to show all buttons pressed
    display.textContent = firstNum + " " + selectedOperator + " " + secondNum;

}

