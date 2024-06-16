let generateCode = document.getElementById("generateCode");

let container = document.getElementById('table-container');

let html = document.querySelector('.html');
let css = document.querySelector('.css');

let hColor = document.getElementById("hColor");
let mColor = document.getElementById('mColor');

var MyTable = document.getElementById('table');
var myrows = MyTable.getElementsByTagName('tr');


//code

let htmlCode = document.getElementById("html-code");
let csCode = document.getElementById("css-code");
let rows = document.getElementById('rows');
let cols = document.getElementById('cols');

function generateTable(rows, cols) {
    
    gen = '<table id="table"> \n' ;
    table = '<table id="table">' ;
    for (let i = 0; i <= rows; i++) {
        table += '<tr>';
        gen += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '<tr> \n';
        for (let j = 0; j < cols; j++) {
            if (i === 0) {
                table += '<th style="background-color: ' + `${hColor.value}` + ';">Header ' + (j + 1) + '</th> ';
                gen += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
                '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
                '<th id="header">Header ' + (j + 1) + '</th> \n';
            } else {
                table += '<td style="background-color: ' + `${mColor.value}` + ';">Row' + (i) + ', Col ' + (j) + '</td>';
                gen += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
                '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 
                '<td id="RC">Row ' + (i) + ', Col ' + (j) + '</td>\n';
            }
        }
        table += '</tr>';
        gen += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '</tr>\n';
    }
    table += '</table>';
    gen += '</table> \n';
    
}

let table = '';
let gen = "";

let t = '';
let th = '';
let td = '';
let thtd = '';

hColor.addEventListener('input', function(){
    generateTable(rows.value, cols.value);
    container.innerHTML = table;
    
})

mColor.addEventListener('input', function(){
    generateTable(rows.value, cols.value);
    container.innerHTML = table;
    
})

rows.addEventListener('input', function(){
    generateTable(rows.value, cols.value);
    container.innerHTML = table;
})

cols.addEventListener('input', function(){
    generateTable(rows.value, cols.value);
    container.innerHTML = table;
})

generateCode.addEventListener('click', function(){
    generateTable(rows.value, cols.value);
    html.style.opacity = 1;
    css.style.opacity = 1;
    csCode.style.opacity = 1;
    htmlCode.style.opacity = 1;
    htmlCode.innerText = gen;

    t = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'border-collapse: collapse; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'width: 100%; \n';
    thtd = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'border: 1px solid black; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'padding: 10px; \n' +
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'text-align: center; \n';
    th = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'background-color: ' + `${hColor.value}` + '; \n';
    td = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
    'background-color: ' + `${mColor.value}` + '; \n';

    cssCode = `table {
        ${t}} \n` +
        `th, td {
        ${thtd}} \n` +
        `th {
        ${th}} \n` +
        `td {
        ${td}}`;
    csCode.innerText = cssCode;
})