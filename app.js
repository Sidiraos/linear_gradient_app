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
hex1.setAttribute('data-color' , `${hex1.value.toUpperCase()}`);
hex2.setAttribute('data-color' , `${hex2.value.toUpperCase()}`);


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
    bgLinearCode = body.style.background;
    document.querySelector('#degValue').textContent = rangeColor.value;
    hex1.setAttribute('data-color' , `${hex1.value.toUpperCase()}`);
    hex2.setAttribute('data-color' , `${hex2.value.toUpperCase()}`);
    adaptInputColor();

 }
// copy text
copyBtn.addEventListener('click' , copyText) ;

function copyText(e) { 
    e.target.disabled = true ;
    navigator.clipboard.writeText(bgLinearCode).then(()=>{
        console.log("le texte a été copié") ;
        // document.getElementById('copied').style.display = "block";
        $('#copied').fadeIn();

        setTimeout(()=>{
            // document.getElementById('copied').style.display = "none";
            $('#copied').fadeOut();
            e.target.disabled = false ;

        } , 1000)
        // afficher la tooltip
    } , (err) => {
        console.log("failed copy " , err)
    })

 }
// generate random color
randomBtn.addEventListener('click' , createRandomLinear);

function generateHexColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("random color : " , randomColor);
    return randomColor;
}

function createRandomLinear (){
    hex1.value = `#${generateHexColor()}` ;
    hex2.value = `#${generateHexColor()}`;
    console.log(hex1.value , hex2.value);
    changeInputBackgroundColor();

}

//adapt input Color
function adaptInputColor () {
    let hexs = [hex1 , hex2];
    hexs.forEach(hexColor => {
        const hexColorString = hexColor.value.replace('#' , "");
        const red = parseInt(hexColorString.slice(0,2) , 16);
        const green = parseInt(hexColorString.slice(2,4) , 16);
        const blue = parseInt(hexColorString.slice(4,6) , 16);
        const yiq = (red * 299 + green * 587 + blue * 144)/1000
        console.log(yiq) ;
        if (yiq >= 128) {
            hexColor.setAttribute('class' , 'text-dark');
        }
        else {
            // hexColor.setAttribute('color-hex' , '#f1f1f1');
            hexColor.setAttribute('class' , 'text-light');


        }
    } )
}
