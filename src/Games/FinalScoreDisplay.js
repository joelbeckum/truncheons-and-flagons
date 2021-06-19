import { startGamePage } from "./startGame.js";
import { setScoreBoard } from "./EnterGameScore.js";

export const FinalScoreDisplay = (winnerName) => {
  return `
		<section> 
			<div> The ${winnerName} is the last dragon standing! Roar! </div>
			<div class="end_game_button_wrapper">
			<button id="end_game" class="end_game">Start Game</button>
			</div>
		</section>
	`;
};

const mainContainer = document.querySelector(".container");

document.addEventListener("click", (event) => {
  if (event.target.id === "end_game") {
    setScoreBoard();
    document.getElementById("chosenTeam1").innerHTML = "Team 1";
    document.getElementById("chosenTeam2").innerHTML = "Team 2";
    document.getElementById("chosenTeam3").innerHTML = "Team 3";
    mainContainer.innerHTML = startGamePage();
  }
});
