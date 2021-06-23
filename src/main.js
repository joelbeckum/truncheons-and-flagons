import { startGamePage } from "./Games/startGame.js";
import { AddNewPlayer } from "./Players/addNewPlayer.js";
import { AddNewTeam } from "./Teams/addNewTeam.js";
import { fetchExternalData, applicationState } from "./dataAccess.js";
import { StatTicker } from "./StatTicker/statTicker.js";

console.log("Mother of Dragons is alive!!!");

const mainContainer = document.querySelector(".container");

const statTicker = document.querySelector(".stat_ticker");

applicationState.isPlaying.isPlaying = false

const render = () => {
  fetchExternalData().then(() => {
    mainContainer.innerHTML = startGamePage();
    statTicker.innerHTML = StatTicker();
  });
};

render();

document.addEventListener("click", (event) => {
  if (event.target.id === "add_team") {
    if (applicationState.isPlaying.isPlaying === true) {
      window.alert(" you cant ues this button while in the game");
      return;
    } else {
      mainContainer.innerHTML = AddNewTeam();
      
    }
  }
});
document.addEventListener("click", (event) => {
  if (event.target.id === "add_player") {
    if (applicationState.isPlaying.isPlaying === true) {
	window.alert(" you cant ues this button while in the game");
      return;
    } else {
      mainContainer.innerHTML = AddNewPlayer();
    }
  }
});

document.addEventListener("stateChanged", (customEvent) => {
  render();
});
