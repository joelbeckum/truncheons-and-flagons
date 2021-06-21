import { startGamePage } from "./Games/startGame.js";
import { AddNewPlayer } from "./Players/addNewPlayer.js";
import { AddNewTeam } from "./Teams/addNewTeam.js";
import { fetchExternalData } from "./dataAccess.js";
import { StatTicker } from "./StatTicker/statTicker.js";

console.log("Mother of Dragons is alive!!!");

const mainContainer = document.querySelector(".container");

const statTicker = document.querySelector(".stat_ticker");

const render = () => {
  fetchExternalData().then(() => {
    mainContainer.innerHTML = startGamePage();
    statTicker.innerHTML = StatTicker();
  });
};

render();

document.addEventListener("click", (event) => {
  if (event.target.id === "add_team") {
    mainContainer.innerHTML = AddNewTeam();
    console.log("The Add team button is connected");
  }
});
document.addEventListener("click", (event) => {
  if (event.target.id === "add_player") {
    mainContainer.innerHTML = AddNewPlayer();
  }
});

document.addEventListener("stateChanged", (customEvent) => {
  render();
});
