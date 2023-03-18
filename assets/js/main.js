const containerEl = document.querySelector(".main_container")
const selectEl = document.querySelector("select")
const buttonEl = document.querySelector(".my_btn")

const easy = 100;
const medium = 81;
const hard = 49;

function difficulty(select_difficulty) {
    for (let i = 1; i <= select_difficulty; i++) {
        if (selectEl.value == "easy_lv") {
            containerEl.innerHTML += `<div class="single_cell cell fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
        } else if (selectEl.value == "medium_lv") {
            containerEl.innerHTML += `<div class="single_cell cell2 fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
        } else {
            containerEl.innerHTML += `<div class="single_cell cell3 fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
        }
    }}

    function changeBackground(arrayElement) {
        for (let i = 0; i < arrayElement.length; i++) {
            const singleCell = arrayElement[i]
            singleCell.addEventListener("click", function () {
                this.classList.toggle("click_background")
                console.log(this.innerText)
            })
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
        const arrayCell = document.querySelectorAll(".single_cell")
        changeBackground(arrayCell)
    })


// Animation explosion

const imgContainer = document.getElementById("img_container");

function getRandomPosition() {
    const x = window.innerWidth - 175; 
    const randomX = Math.floor(Math.random() * x);
    return [randomX];
}

function showImage() {
    imgContainer.style.opacity = 1;
    const x = getRandomPosition();
    imgContainer.style.left = x + "px";   
}

function hideImage() {
    imgContainer.style.opacity = 0;
}


let showInterval = setInterval(showImage, 3000);
let hideInterval = setInterval(hideImage, 2000);




