"use strict";

//MODAL 1, ALL ACTIVITY, ACTIVITY PAGE
const body = document.querySelector(".body");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-lock");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-lock");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//MODAL 2, ALL ACHIEVEMENTS, ACTIVITY PAGE

const modalTwo = document.querySelector(".modalTwo");
const btnCloseModalTwo = document.querySelector(".close-modal-two");
const btnsOpenModalTwo = document.querySelectorAll(".show-modal-two");

const openModalTwo = function () {
  modalTwo.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-lock");
};

const closeModalTwo = function () {
  modalTwo.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-lock");
};

for (let i = 0; i < btnsOpenModalTwo.length; i++)
  btnsOpenModalTwo[i].addEventListener("click", openModalTwo);

btnCloseModalTwo.addEventListener("click", closeModalTwo);
overlay.addEventListener("click", closeModalTwo);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalTwo();
  }
});


