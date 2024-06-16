const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

// let html = document.querySelector(".html");

let css = document.querySelector('.css');

//code

let csCode = document.getElementById("css-code");

const getRandomColor = () => {
    // Generating a random color in hexadecimal format. Example: #5665E9
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}
const generateGradient = (isRandom) => {
    if(isRandom) { // If isRandom is true, update the colors inputs value with random color
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    // Creating a gradient string using the select menu value with color input values
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[1].value}, ${colorInputs[0].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}
const copyCode = () => {
    // Copying textarea value and updating the copy button text
    // navigator.clipboard.writeText(textarea.value);
    csCode.innerText = textarea.value;
    copyBtn.innerText = "Code Copied";
    css.style.opacity = 1;
    csCode.style.opacity = 1;
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}
colorInputs.forEach(input => {
    // Calling generateGradient function on each color input clicks
    input.addEventListener("input", () => generateGradient(false));
});
selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);