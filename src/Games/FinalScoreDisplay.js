import {startGame} from "./startGame.js" 


 export const FinalScoreDisplay = () => {
	return `
		<section> 
			<div> The {Team Name Place Holder} has won the game! Roar! </div>

			
			<button id="end_game" class="end_game">Start Game</button>
			<button id="submit_new_team"> Add New Team </button>
			</div>

		</section>
	`
 }

 const mainContainer = document.querySelector(".container")

document.addEventListener("click",(event) => {
	if (event.target.id === "end_game"){
		mainContainer.innerHTML = startGame()
		console.log("submit new player is connected")
	}
} )