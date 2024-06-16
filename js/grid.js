let grid = document.getElementById('grid');

let html = document.querySelector('.html');
let css = document.querySelector('.css');

//code
let htmlCode = document.getElementById("html-code");
let csCode = document.getElementById("css-code");

let preview = document.querySelector('.grid-preview')

let generateCode = document.getElementById("generateCode");



function generateGrid(rows, rowGap, colGap) {
    grid.innerHTML = "";
    grid.style.columnGap = `${colGap}px`;
    cGap = `${colGap}px`;
    grid.style.paddingTop = `${rowGap}px`;
    TBpadding = `${rowGap}px`;
    grid.style.paddingBottom = `${rowGap}px`;
    gen = '<div class="header"></div> \n' +
        '<div class="grid-wrapper"> \n' +
        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
        '<div id="grid">\n';

    for (let i = 0; i < rows; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        gen +=  '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
        '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '<div class="cell"></div> \n';
    }
    gen += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '</div>\n'
     + '</div> \n' + '<div class="footer"></div>';
}

let rows = document.getElementById("rowNumber");
let rowGap = document.getElementById("rowGap");
let colGap = document.getElementById("columnGap");
let cssCode = "";
let TBpadding = "";
let cGap = "";
let gen = "";

let hf = '';
let gridwrp = '';
let g = '';
let c = '';

rows.addEventListener('input', function(){
    generateGrid(rows.value, rowGap.value, colGap.value);
})

rowGap.addEventListener('input', function(){
    generateGrid(rows.value, rowGap.value, colGap.value);
})

colGap.addEventListener('input', function(){
    generateGrid(rows.value, rowGap.value, colGap.value);
})

generateCode.addEventListener('click', function(){
    html.style.opacity = 1;
    css.style.opacity = 1;
    csCode.style.opacity = 1;
    htmlCode.style.opacity = 1;
    htmlCode.innerText = gen;

    hf = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'display: flex; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'background-color: #3E8E8E8; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'width: 100%; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
    'height: 40px; \n';
    gridwrp = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'display: flex; \n';
    g = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'display: flex; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'width: 100%; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
    'height: 40px; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'column-gap:' + `${cGap != "" ? cGap : "0"}; \n` +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'padding: ' + `${TBpadding != "" ? TBpadding : "auto"}; \n`;
    c = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'display: flex; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'width: 100%; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
    'height: 40vh; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'padding: 10px; \n';

    cssCode = `.header, .footer {
        ${hf}} \n` + 
        `.grid-wrapper {
        ${gridwrp}} \n` +
        `#grid {
        ${g}} \n` +
        `.cell{
        ${c}}`;
    csCode.innerText = cssCode;
})
