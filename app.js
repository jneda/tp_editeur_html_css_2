/* faux curseurs https://codepen.io/team/css-tricks/pen/YzGoBGq */

const editor = document.querySelector('.editor');
const preview = document.querySelector('.preview');

const bold = document.querySelector('input[value="bold"]');
const italic = document.querySelector('input[value="italic"]');

const executeBtn = document.querySelector('input[value="Exécuter"]');

const charsMeter = document.querySelector('.charsMeter');

const charsRemaining = document.querySelector('.charsRemaining');

let maxChars = 200; " "

function updateMeters() {
    const nbChars = editor.value.length;
    charsMeter.value = nbChars;
    charsRemaining.innerText = maxChars - nbChars;
}

function updatePreview(){
    const code = editor.value;
    preview.innerHTML= code;
}

function putBold(){
    editor.value += "<b></b>";
}

function putItalic(){
    editor.value += "<i></i>";
}

editor.addEventListener("input", updateMeters);
executeBtn.addEventListener("click", updatePreview);

bold.addEventListener("click", putBold);
italic.addEventListener("click", putItalic);
















