const btn = document.getElementById("btn");
btn. addEventListener("click", function(){
const firstValue = parseInt(document.getElementById("firstValue").value);
const secondValue = parseInt(document.getElementById("secondValue").value);
const operator = document.getElementById("operator").value;

const resultContainer = document.getElementById("result");
switch(operator) {
    case "+":
        result = firstValue + secondValue;
        break;
    case "-":
        result = firstValue - secondValue;
        break;
    case "/":
        result = firstValue / secondValue;
        break;
    case "*":
        result = firstValue * secondValue;
        break;
    default:
        console.log("Invalid Operator");
}
resultContainer.innerHTML = result;
})