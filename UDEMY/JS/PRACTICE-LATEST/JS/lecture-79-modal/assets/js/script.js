`use strict`;

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
// console.log(btnsOpenModal);

const openModal = function () {
    // console.log(`Button Clicked`);
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}

const closeModal = function () {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);
// if we use closeModal() "parenthesis" after function name in above line, then it will directly call the function as soon as this line of code will get executed. But we want that this function will run only when a user click on btnCloseModal. So in the above line of code there is only name of function without parenthesis. THIS IS ONLY DECLARE NOT CALLING. 


overlay.addEventListener(`click`, closeModal);

document.addEventListener('keydown', function (e) { // e stands for 'event' but we can use any word or letter as well - THIS WILL GENERATE OBJECT
    // console.log(`A key was pressed`);
    console.log(e.key);

    if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
        closeModal();
    }
})

