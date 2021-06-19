import { startGamePage } from "./startGame.js";
import {
  setScoreBoard,
  totalTeam1Score,
  totalTeam2Score,
  totalTeam3Score,
} from "./EnterGameScore.js";

export const FinalScoreDisplay = (winnerName) => {
  return `
		<section> 
			<div> The ${winnerName} has won the game! Roar! </div>
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
    mainContainer.innerHTML = startGamePage();
  }
});
