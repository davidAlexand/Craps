export class Animation {
  scorePLayer;
  activePlayer;
  switchPlayer;
  randomFirtsCube;
  randomSecondCube;
  scores;

  constructor() {
    this.scorePLayer = 0;
    this.activePlayer = 0;
    this.switchPlayer = function () {
      const player0El = document.querySelector(".player--0");
      const player1El = document.querySelector(".player--1");
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
      document.getElementById(`current--${this.activePlayer}`);
      this.activePlayer = this.activePlayer == 0 ? 1 : 0;
    };
  }
  displaySpinAnimation(diceCFirst, diceSecond) {
    var diceCFirst = document.querySelector(diceCFirst);
    diceCFirst.classList.toggle("firstCube", true);
    setTimeout(() => {
      diceCFirst.classList.toggle("firstCube", false);
    }, 3000);
    var diceSecond = document.querySelector(diceSecond);
    diceSecond.classList.toggle("secondCube", true);
    setTimeout(() => {
      diceSecond.classList.toggle("secondCube", false);
    }, 3000);
  }

  setDiceFaces(faceFirtsCube, faceSecondCube) {
    this.randomFirtsCube = Math.trunc(Math.random() * 6) + 1;
    var faceFirtsCube = document.querySelector(faceFirtsCube);
    faceFirtsCube.src = `face-${this.randomFirtsCube}.png`;
    this.randomSecondCube = Math.trunc(Math.random() * 6) + 1;
    var faceSecondCube = document.querySelector(faceSecondCube);
    faceSecondCube.src = `face-${this.randomSecondCube}.png`;
  }
  initializeScore(scorePlayer1, scorePlayer2) {
    var score1 = document.getElementById(scorePlayer1);
    var score2 = document.getElementById(scorePlayer2);
    this.scores = [0, 0];
    this.scorePLayer = 0;
    score1.textContent;
    score2.textContent;
  }

  calculateScore(idScoreCurrent1, idScoreCurrent2) {
    var scoreCurrent0 = document.getElementById(idScoreCurrent1);
    var scoreCurrent1 = document.getElementById(idScoreCurrent2);
    scoreCurrent0.textContent = 0;
    scoreCurrent1.textContent = 0;
    if (
      this.randomFirtsCube + this.randomSecondCube == 7 ||
      this.randomFirtsCube + this.randomSecondCube == 11
    ) {
      setTimeout(() => {
        this.scorePLayer = this.randomFirtsCube + this.randomSecondCube;
        document.getElementById(`name--${this.activePlayer}`).textContent =
          "🎉Win🎉";
        document
          .querySelector(`.player--${this.activePlayer}`)
          .classList.add("player--win");

        document.getElementById(`current--${this.activePlayer}`).textContent =
          this.scorePLayer;

        this.switchPlayer();
        document
          .querySelector(`.player--${this.activePlayer}`)
          .classList.remove("player--win", "player--crap");
        document.getElementById(`name--${this.activePlayer}`).textContent =
          "   ⏱️.........⏱️";
      }, 3000);
    } else if (
      this.randomFirtsCube + this.randomSecondCube == 2 ||
      this.randomFirtsCube + this.randomSecondCube == 3 ||
      this.randomFirtsCube + this.randomSecondCube == 12
    ) {
      setTimeout(() => {
        document.getElementById(`name--${this.activePlayer}`).textContent =
          "Craps🚫";
        document
          .querySelector(`.player--${this.activePlayer}`)
          .classList.add("player--crap");
        // Add dice to current scor
        this.scorePLayer = this.randomFirtsCube + this.randomSecondCube;
        document.getElementById(`current--${this.activePlayer}`).textContent =
          this.scorePLayer;
        this.switchPlayer();
        document
          .querySelector(`.player--${this.activePlayer}`)
          .classList.remove("player--win", "player--crap");
        document.getElementById(`name--${this.activePlayer}`).textContent =
          "⏱️.........⏱️";
      }, 3000);
    } else if (
      this.randomFirtsCube + this.randomSecondCube >= 4 ||
      this.randomFirtsCube + this.randomSecondCube <= 6 ||
      this.randomFirtsCube + this.randomSecondCube >= 8 ||
      this.randomFirtsCube + this.randomSecondCube <= 10
    ) {
      setTimeout(() => {
        this.scorePLayer = this.randomFirtsCube + this.randomSecondCube;
        document.getElementById(`name--${this.activePlayer}`).textContent =
          "Again🔃";
        document.getElementById(`current--${this.activePlayer}`).textContent =
          this.scorePLayer;
        this.switchPlayer();
        document.getElementById(`name--${this.activePlayer}`).textContent =
          "⏱️......⏱️";
        document
          .querySelector(`.player--${this.activePlayer}`)
          .classList.remove("player--win", "player--crap");
      }, 3000);
    }
  }
}
