import { startGamePage } from "./Games/startGame.js";
import { AddNewPlayer } from "./Players/addNewPlayer.js";
import { AddNewTeam } from "./Teams/addNewTeam.js";
import { fetchExternalData } from "./dataAccess.js";
import { Truncheons } from "./Truncheons.js"

console.log("Mother of Dragons is alive!!!");

const appContainer = document.querySelector("#appContainer")

const render = () => {
  fetchExternalData().then(() => {
	appContainer.innerHTML = Truncheons()
  });
};

render();

// document.addEventListener("click", (event) => {
//   if (event.target.id === "add_team") {
//     mainContainer.innerHTML = AddNewTeam();
//     console.log("The Add team button is connected");
//   }
// });
// document.addEventListener("click", (event) => {
//   if (event.target.id === "add_player") {
//     mainContainer.innerHTML = AddNewPlayer();
//   }
// });

document.addEventListener("stateChanged", (customEvent) => {
  render();
});
