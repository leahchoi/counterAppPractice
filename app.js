
document.querySelector(".incrementBox").addEventListener("click", boxClicked)
var boxValue = document.querySelector(".value");
var counter = 0;
function displayValue() {
    boxValue.textContent = counter
}
function boxClicked() {
    counter++
    displayValue();
}
function hoveredBox() {
    clearInterval();
}