var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

var eladd = document.getElementsByName("adicionar");
eladd[0].addEventListener("click", increment);

var eldec = document.getElementsByName("subtrair");
eldec[0].addEventListener("click", decrement);