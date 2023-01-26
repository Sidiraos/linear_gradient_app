const hex1 = document.getElementById('hex1');
const hex2 = document.getElementById('hex2');
const inputs = document.querySelectorAll('input');
const body = document.querySelector('body');
const rangeColor = document.querySelector('#rangeColor');
const copyBtn = document.querySelector('#copyBtn');
const randomBtn = document.querySelector('#randomBtn')
let bgLinearCode;


hex1.style.backgroundColor = hex1.value;
hex2.style.backgroundColor = hex2.value;
hex1.setAttribute('data-color' , `${hex1.value}`);
hex2.setAttribute('data-color' , `${hex2.value}`);

bgLinearCode = `linear-gradient(${rangeColor.value}deg , ${hex1.value} , ${hex2.value})`;
body.style.background = bgLinearCode;

inputs.forEach(input => {
    input.addEventListener('change' , changeInputBackgroundColor) ;
    input.addEventListener('input' , changeInputBackgroundColor);
})

function changeInputBackgroundColor () { 
    hex1.style.backgroundColor = hex1.value;
    hex2.style.backgroundColor = hex2.value;
    body.style.background = `linear-gradient(${rangeColor.value}deg , ${hex1.value} , ${hex2.value})`;
    document.querySelector('#degValue').textContent = rangeColor.value;
    hex1.setAttribute('data-color' , `${hex1.value}`);
    hex2.setAttribute('data-color' , `${hex2.value}`);

 }
// copy text
copyBtn.addEventListener('click' , copyText) ;

function copyText(e) { 
    navigator.clipboard.writeText(bgLinearCode).then(()=>{
        console.log("le texte a été copié") ;
        // document.getElementById('copied').style.display = "block";
        $('#copied').fadeIn();

        setTimeout(()=>{
            // document.getElementById('copied').style.display = "none";
            $('#copied').fadeOut();
        } , 1000)
        // afficher la tooltip
    } , (err) => {
        console.log("failed copy " , err)
    })

 }
// generate random color
randomBtn.addEventListener('click' , createRandomLinear);

function generateHexColor() {
    let randomColor = "";
    let randomNumber = "";
    for(let i=0 ; i<6 ; i++) {
        randomNumber = Math.round(Math.random() * 15);
        randomColor += randomNumber.toString(16)
    }
    return randomColor;
}

function createRandomLinear (){
    hex1.value = `#${generateHexColor()}` ;
    hex2.value = `#${generateHexColor()}`;
    console.log(hex1.value , hex2.value);
    changeInputBackgroundColor();

}

//tooltip
