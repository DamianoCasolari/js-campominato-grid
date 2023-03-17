const containerEl = document.querySelector(".main_container")
const selectEl = document.querySelector("select")
const buttonEl = document.querySelector(".my_btn")

const easy = 100;
const medium = 81;
const hard = 49;
let numberElement = 0;

function difficulty(select_difficulty) {
    for (let i = 1; i <= select_difficulty; i++) {
        numberElement++
        if (selectEl.value == "easy_lv") {
            containerEl.innerHTML += `<div class="single_cell cell  fs-3 d-flex justify-content-center align-items-center">${i}</div>`
        } else if (selectEl.value == "medium_lv") {
            containerEl.innerHTML += `<div class="single_cell cell2 fs-3 d-flex justify-content-center align-items-center">${i}</div>`
        } else {
            containerEl.innerHTML += `<div class="single_cell cell3 fs-3 d-flex justify-content-center align-items-center">${i}</div>`
    }
}}

buttonEl.addEventListener("click", function () {
    containerEl.innerHTML = "";
    if (selectEl.value == "easy_lv") {
        difficulty(easy);
        const arrayCell = document.querySelectorAll(".single_cell")
        changeBackground(arrayCell)
    } else if (selectEl.value == "medium_lv") {
        difficulty(medium);
        const arrayCell = document.querySelectorAll(".single_cell")
        changeBackground(arrayCell)
    } else {
        difficulty(hard);
        const arrayCell = document.querySelectorAll(".single_cell")
        changeBackground(arrayCell)
    }
})

function changeBackground(arrayElement){
for (let i = 0; i < arrayElement.length; i++) {
    const singleCell = arrayElement[i]
    singleCell.addEventListener("click", function(){
        this.classList.toggle("click_background")
        console.log(this.innerText)
    })
}}




