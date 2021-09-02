let input = document.querySelector("input");
let button = document.querySelector("button");
let pera = document.querySelector("p");

button.addEventListener('click', calculation);
function calculation() {
    const x = input.value;
    if (x<= 10){
        var y = x*100;
        pera.textContent ="Your hotel room charge is "+ y;
    }
    else if(x >10 && x <= 20) {
        var z = 1000 + (x-10)* 80;
        pera.textContent ="Your hotel room charge is "+ z;
    }
    else{
        var i = 1800 + (x - 20)*50;
        pera.textContent ="Your hotel room charge is "+ i;
    }
}