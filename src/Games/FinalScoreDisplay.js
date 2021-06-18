import { startGamePage } from "./startGame.js";

export const FinalScoreDisplay = () => {
  return `
		<section> 
			<div> The {Team Name Place Holder} has won the game! Roar! </div>
			<button id="end_game" class="end_game">Start Game</button>
		</section>
	`;
};

const mainContainer = document.querySelector(".container");

document.addEventListener("click", (event) => {
  if (event.target.id === "end_game") {
    mainContainer.innerHTML = startGamePage();
    console.log("submit new player is connected");
  }
});
