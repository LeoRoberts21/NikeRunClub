homeBtn.addEventListener("mouseleave", clubHover);
plansBtn.addEventListener("mouseleave", clubHover);
clubBtn.addEventListener("mouseleave", clubHover);
activityBtn.addEventListener("mouseleave", clubHover);

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


// HIDDEN NAV-BAR
