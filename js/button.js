let btnText = document.getElementById('btnText');
let bgColor = document.getElementById("btnColor");

// padding
let tPad = document.getElementById("TBPad");
let rPad = document.getElementById("LRPad");
let bPad = document.getElementById ("TBPad");
let lPad = document.getElementById("LRPad");
//radius
let tlRad = document.getElementById("btnRad");
let trRad = document.getElementById("btnRad");
let blRad = document.getElementById ("btnRad");
let brRad = document.getElementById("btnRad");

let btn = document.getElementById("btnDummy");

let btnBtn = document.getElementById("btnBtn");
let btnGrad = document.getElementById("btnGrad");
let btnTab = document.getAnimations("btnTab");
let btnGrid = document.getElementById("btnGrid");

//generateCode Button
let generateCode = document.getElementById("generateCode");

// let html = document.querySelector(".html");

let html = document.querySelector('.html');
let css = document.querySelector('.css');

// let css = document.queryselector(".css");

//code
let htmlCode = document.getElementById("html-code");
let csCode = document.getElementById("css-code");

let cssCode = "";
let bColor = "";
let tPadding = "";
let lPadding = "";
let bPadding = "";
let rPadding = "";
let tLeftRadius = "";
let tRightRadius = "";
let bLeftRadius = ""; 
let bRightRadius = "";

// Here we are listening to the input event. 
// Whenever user type any character in input field the callback function will call. 
// Firt, we take the value whatever user type into the input field and then we create the button tag 
// and pass the value that user typed and store it in a button variable.

btnText.addEventListener('input', function() {
    btn.innerText = btnText.value;
    button = `<button>${btnText.value}</button>`;
})



// Here we are listening to the input event. 
// Whenever user type any value in input field the callback function will call. Firt, we
// take the value whatever user type into the input field and then assign that value as a background color of the button. 
// Same procedure will follow for the rest of the input fields.

bgColor.addEventListener('input', function(){
    bColor = bgColor.value;
    btn.style.backgroundColor = bgColor.value;
})

tPad.addEventListener('input', function(){
    tPadding = `${tPad.value}px`;
    btn.style.paddingTop = `${tPad.value}px`;
})

bPad.addEventListener('input', function(){
    bPadding = `${bPad.value}px`;
    btn.style.paddingBottom = `${bPad.value}px`;
})

lPad.addEventListener('input', function(){
    lPadding = `${lPad.value}px`;
    btn.style.paddingLeft = `${lPad.value}px`;
})

rPad.addEventListener('input', function(){
    rPadding = `${rPad.value}px`;
    btn.style.paddingRight = `${rPad.value}px`;
})

tlRad.addEventListener('input', function(){
    tLeftRadius = `${tlRad.value}px`;
    btn.style.borderTopLeftRadius = `${tlRad.value}px`;
    btn.style.border = 'none';
})

trRad.addEventListener('input', function(){
    tRightRadius = `${trRad.value}px`;
    btn.style.borderTopRightRadius = `${trRad.value}px`;
})
blRad.addEventListener('input', function(){
    bLeftRadius = `${blRad.value}px`;
    btn.style.borderBottomLeftRadius = `${blRad.value}px`;
})
brRad.addEventListener('input', function(){
    bRightRadius = `${brRad.value}px`;
    btn.style.borderBottomRightRadius = `${brRad.value}px`;
})

const filterProps = (props, value) => {
    return value === "" ? "": value === "px" ? "" : `${props}: ${value};\n`;

}

generateCode.addEventListener( 'click', function() {
    cssCode = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    "background-color: " + bColor + "; \n" +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    "color: " + `${bColor != "" ? bColor : "#000"}; \n` +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps("padding-top", tPadding) + 
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps("padding-left", lPadding) + 
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+
    filterProps("padding-bottom", bPadding) + 
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps("padding-right", rPadding) +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps("border-top-left-radius", tLeftRadius) + 
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps("border-top-right-radius", tRightRadius) + 
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps("border-bottom-left-radius", bLeftRadius) + 
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    filterProps ("border-bottom-right-radius", bRightRadius);
    cssCode = `button {
        ${cssCode}}`;
    html.style.opacity = 1;
    css.style.opacity = 1;
    csCode.style.opacity = 1;
    htmlCode.style.opacity = 1;
    htmlCode.innerText = button;
    csCode.innerText = cssCode;
})

btnGrad.addEventListener( 'click', function() {
    btnBtn.style.backgroundColor();
    btnBtn.style.color();
})
