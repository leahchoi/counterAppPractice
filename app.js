var box = document.querySelector('.incrementBox');
box.addEventListener("click", boxClicked);
box.addEventListener('mouseout', handleMouseOut)
box.addEventListener("mouseover", handleMouseOver)
var boxValue = document.querySelector(".value");
var counter = 0;
var decreaseCounter;

function displayValue() {
    boxValue.textContent = counter;
}
function boxClicked() {
    counter++;
    displayValue();
}
function handleMouseOut() {
    decreaseCounter = setInterval(function () {
        if (counter > 0) {
            counter--;
            boxValue.textContent = counter;
        } 
    }, 500);
}
function handleMouseOver() {
    clearInterval(decreaseCounter);
    displayValue();
}

