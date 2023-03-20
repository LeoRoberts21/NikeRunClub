"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".activeBtnReverse",
    prevEl: ".btnReverse",
  },
});

//SWIPER

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".activeBtn",
    prevEl: ".backBtn",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});

// ----------------------------------------HOVER

let homeBtn = document.querySelector(".homeBtn");
let plansBtn = document.querySelector(".plansBtn");
let clubBtn = document.querySelector(".clubBtn");
let activityBtn = document.querySelector(".activityBtn");

const homeHover = function () {
  homeBtn.classList.add("green");
  plansBtn.classList.remove("green");
  clubBtn.classList.remove("green");
  activityBtn.classList.remove("green");
};

const plansHover = function () {
  homeBtn.classList.remove("green");
  plansBtn.classList.add("green");
  clubBtn.classList.remove("green");
  activityBtn.classList.remove("green");
};

const clubHover = function () {
  homeBtn.classList.remove("green");
  plansBtn.classList.remove("green");
  clubBtn.classList.add("green");
  activityBtn.classList.remove("green");
};

const activityHover = function () {
  homeBtn.classList.remove("green");
  plansBtn.classList.remove("green");
  clubBtn.classList.remove("green");
  activityBtn.classList.add("green");
};

homeBtn.addEventListener("mouseover", homeHover);
plansBtn.addEventListener("mouseover", plansHover);
clubBtn.addEventListener("mouseover", clubHover);
activityBtn.addEventListener("mouseover", activityHover);

homeBtn.addEventListener("mouseleave", homeHover);
plansBtn.addEventListener("mouseleave", homeHover);
clubBtn.addEventListener("mouseleave", homeHover);
activityBtn.addEventListener("mouseleave", homeHover);

/*--------------------NAVBAR---------------*/
const hiddenSpace = document.querySelector(".hiddenSpace");

const nav = document.querySelector(".mainNavBar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && lastScrollY > 0.1) {
    nav.classList.add("nav--hidden", "navbar2");
    hiddenSpace.classList.remove("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;

  if (window.scrollY < 0.5) {
    nav.classList.remove("navbar2");
    hiddenSpace.classList.add("nav--hidden");
  }
});

console.log(nav);


//MODAL

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
