var box = document.querySelector('.incrementBox');
box.addEventListener("click", boxClicked)
var boxValue = document.querySelector(".value");
var counter = 0;
function boxClicked(){
    counter++
    displayValue();
}
function displayValue(){
    boxValue.textContent = counter
}
box.addEventListener('mouseout', handleMouseOut)

function handleMouseOut(){
    var decreaseCounter = setInterval(function(){
    if(counter > 0){
        counter--
    }
        boxValue.textContent = counter;
    }, 1000)
}