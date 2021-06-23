import { ChooseTeams } from "./games.js";
import { applicationState } from "../dataAccess.js";

export const startGamePage = () => {
  return '<div class="button_wrapper_start"><button id="start_game" class="start_game_button">Start Game</button></div>';
};

const mainContainer = document.querySelector(".container");

document.addEventListener("click", (event) => {
  if (event.target.id === "start_game") {
    applicationState.isPlaying.isPlaying = true;

    mainContainer.innerHTML = `<div class="dragon_fire"><iframe src="https://giphy.com/embed/TfAHHhLYRTlScWkhdJ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/larianstudios-dragon-baldurs-gate-3-bg3-TfAHHhLYRTlScWkhdJ"></a></p>`;
    setTimeout(() => {
      mainContainer.innerHTML = ChooseTeams();
    }, 3250);
  }
});
