"use strict";
import { Craps } from "./Craps.js";
const btnRoll = document.querySelector(".btn--roll");
const craps = new Craps();
btnRoll.addEventListener("click", function () {
  btnRoll.disabled = true;
  setTimeout(() => {
    btnRoll.disabled = false;

    console.log("Botón reactivado después de 3 segundos");
  }, 4000);
  craps.throwDices();
});
