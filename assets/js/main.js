const containerEl = document.querySelector(".main_container")

const easy = 100;
const medium = 81;
const hard = 49;


function difficulty(select_difficulty){
for (let i = 0; i < select_difficulty; i++) {
    containerEl.innerHTML += `<div class="cell"></div>`
}}

difficulty(easy);

