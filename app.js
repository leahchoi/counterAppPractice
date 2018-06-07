document.querySelector(".incrementBox").addEventListener("click", boxClicked)
var boxValue = document.querySelector(".value");
var counter = 0;
function boxClicked(){
    counter++
    displayValue();
}
function displayValue(){
    boxValue.textContent = counter
}