import { startGamePage } from "./startGame.js";
import { setScoreBoard } from "./EnterGameScore.js";

export const FinalScoreDisplay = (winnerName) => {
  return `	
  	<div class="final_score_display_wrapper">
		<section class="final_score_display"> 
			<div class="winner_announcement"> The ${winnerName} are the last dragons standing!</div><div> Roar! </div>
			<div class="end_game_button_wrapper">
			<button id="end_game" class="end_game">Start New Game</button>
			</div>
		</section>
	</div>
	`;
};


document.addEventListener("click", (event) => {
	if (event.target.id === "end_game") {
	const mainContainer = document.querySelector(".container");
    setScoreBoard();
    document.getElementById("chosenTeam1").innerHTML = "Team 1";
    document.getElementById("chosenTeam2").innerHTML = "Team 2";
    document.getElementById("chosenTeam3").innerHTML = "Team 3";
    mainContainer.innerHTML = startGamePage();
  }
});
