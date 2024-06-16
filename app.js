const menu = document.querySelector('#mobile-menu');
const menuList = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuList.classList.toggle('active');
});

const showResultCSS = () => {

    const byId = id => document.getElementById(id);
    const textArea = byId("genreated-code-css");
    const output = byId("display-code-css");


    output.textContent = textArea.value.split(" ").length;
};

const showResultHTML = () => {

    const byId = id => document.getElementById(id);
    const textArea = byId("genreated-code-html");
    const output = byId("display-code-html");


    output.textContent = textArea.value.split(" ").length;
};
const showResultCSSActive = () => {

    const byId = id => document.getElementById(id);
    const textArea = byId("genreated-code-css--active");
    const output = byId("display-code-css-active");


    output.textContent = textArea.value.split(" ").length;
};