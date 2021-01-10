const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

const defaultResult = 0;
let currentResult = defaultResult;

//gumar================================================================================
function add() {

  const calcDescription = `${currentResult} + ${userInput.value}`;
 
  currentResult = currentResult + parseFloat(userInput.value);
  outputResult(currentResult, calcDescription);
}
addBtn.addEventListener("click", add);

 //hanum================================================================================
function subtract() {
    const calcDescription = `${currentResult} - ${userInput.value}`;
    
    currentResult = currentResult - parseFloat(userInput.value);
    outputResult(currentResult, calcDescription);
  }
  subtractBtn.addEventListener("click", subtract);

//bazmapatkum===========================================================================
  function multiply() {
    const calcDescription = `${currentResult} * ${userInput.value}`;
    currentResult = currentResult * parseFloat(userInput.value);
    outputResult(currentResult, calcDescription);
  }
  multiplyBtn.addEventListener("click", multiply);



  //bajanum==================================================================
  function divide() {
    const calcDescription = `${currentResult} / ${userInput.value}`;
    currentResult = currentResult / parseFloat(userInput.value);
    outputResult(currentResult, calcDescription);
  }
  divideBtn.addEventListener("click", divide);


