const containerEl = document.querySelector(".main_container")
const selectEl = document.querySelector("select")
const buttonEl = document.querySelector(".my_btn")

const easy = 100;
const medium = 81;
const hard = 49;


function difficulty(select_difficulty) {
    for (let i = 1; i <= select_difficulty; i++) {
        if (selectEl.value == "easy_lv") {
        containerEl.innerHTML += `<div class="cell fs-3 d-flex justify-content-center align-items-center">${i}</div>`
        } else if (selectEl.value == "medium_lv"){
            containerEl.innerHTML += `<div class="cell2 fs-3 d-flex justify-content-center align-items-center">${i}</div>`
        } else {
            containerEl.innerHTML += `<div class="cell3 fs-3 d-flex justify-content-center align-items-center">${i}</div>`
        }
    }
}


buttonEl.addEventListener("click", function () {
    containerEl.innerHTML = "";
    if (selectEl.value == "easy_lv") {
        difficulty(easy);
    } else if (selectEl.value == "medium_lv") {
        difficulty(medium);
    } else {
        difficulty(hard);
    }
})





