import { Animation } from "./Animation.js";
var cube = new Animation();
export class Craps {
  throwDices() {
    cube.displaySpinAnimation(".firstContainer", ".secondContainer");
    cube.setDiceFaces(".spinFirts", ".spinSecond");
    cube.initializeScore("score--0", "score--1");
    cube.calculateScore("current--0", "current--1");
  }
}
