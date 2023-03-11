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

const leaderboardButton = document.querySelector(".leaderboardButton");
const challengeButton = document.querySelector(".challengeButton");

const leaderboardModal = document.querySelector(".leaderboardModal");
const challengeModal = document.querySelector(".challengeModal");

const showLeaderboard = function () {
  challengeModal.classList.add("hidden");
  leaderboardModal.classList.remove("hidden");
};

const showChallenge = function () {
  leaderboardModal.classList.add("hidden");
  challengeModal.classList.remove("hidden");
};

leaderboardButton.addEventListener("click", showLeaderboard);

challengeButton.addEventListener("click", showChallenge);

/*--------------------BUTTON-COLOUR-CHANGE---------------*/

const challengeFunc = function () {
  leaderboardButton.classList.add("btnOpacity");
  challengeButton.classList.remove("btnOpacity");
};

const leaderboardFunc = function () {
  leaderboardButton.classList.remove("btnOpacity");
  challengeButton.classList.add("btnOpacity");
};

leaderboardButton.addEventListener("click", leaderboardFunc);
challengeButton.addEventListener("click", challengeFunc);