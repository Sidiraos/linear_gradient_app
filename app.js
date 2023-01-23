let hex1 = document.getElementById('hex1');
let hex2 = document.getElementById('hex2');
let inputs = document.querySelectorAll('input[type="color"]');
let body = document.querySelector('body');

hex1.style.backgroundColor = hex1.value;
hex2.style.backgroundColor = hex2.value;
body.style.background = `linear-gradient(90deg , ${hex1.value} , ${hex2.value})`
inputs.forEach(input => {
    input.addEventListener('change' , changeInputBackgroundColor) ;
    input.addEventListener('input' , changeInputBackgroundColor);
})

function changeInputBackgroundColor (e) { 
    e.target.style.backgroundColor = e.target.value;
    body.style.background = `linear-gradient(90deg , ${hex1.value} , ${hex2.value})`;
 }