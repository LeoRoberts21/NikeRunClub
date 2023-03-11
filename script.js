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

let homeBtn = document.querySelector(".homeBtn")
let plansBtn = document.querySelector(".plansBtn")
let clubBtn = document.querySelector(".clubBtn")
let activityBtn = document.querySelector(".activityBtn")

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



// ----------------------------PROJECT-SWITCH------------

const codeBtn = document.querySelector(".codeBtn");
const designBtn = document.querySelector(".designBtn");

const codeModal = document.querySelector(".codeModal");
const designModal = document.querySelector(".designModal");

const showCode = function () {
  codeModal.classList.remove("hidden");
  designModal.classList.add("hidden");
};

const showDesign = function () {
  designModal.classList.remove("hidden");
  codeModal.classList.add("hidden");
};

designBtn.addEventListener("click", showDesign);

codeBtn.addEventListener("click", showCode);