import { AddNewPlayer } from "./Players/addNewPlayer.js";
import { AddNewTeam } from "./Teams/addNewTeam.js";
import { fetchExternalData, applicationState } from "./dataAccess.js";
import { Truncheons } from "./Truncheons.js"

console.log("Mother of Dragons is alive!!!");

const appContainer = document.querySelector("#appContainer")

applicationState.isPlaying.isPlaying = false

const render = () => {
  fetchExternalData().then(() => {
	appContainer.innerHTML = Truncheons()
  });
};

render();

document.addEventListener("click", (event) => {
  if (event.target.id === "add_team") {
	const mainContainer = document.querySelector(".container")
    if (applicationState.isPlaying.isPlaying === true) {
      window.alert(" You can't use this button while in the game");
      return;
    } else {
      mainContainer.innerHTML = AddNewTeam();
      
    }
  }
});
document.addEventListener("click", (event) => {
  if (event.target.id === "add_player") {
	const mainContainer = document.querySelector(".container")
    if (applicationState.isPlaying.isPlaying === true) {
	window.alert(" You can't use this button while in the game");
      return;
    } else {
      mainContainer.innerHTML = AddNewPlayer();
    }
  }
});

document.addEventListener("stateChanged", (customEvent) => {
  render();
});
