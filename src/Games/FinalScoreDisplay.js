 
 export const FinalScoreDisplay = () => {
	return `
		<section> 
			<div> The {Team Name Place Holder} has won the game! Roar! </div>
			
			<div class="game_over_button_wrapper">
			<button id="submit_new_player"> Add New Player </button>
			<button id="start_game" class="start_game_button">Start Game</button>
			<button id="submit_new_team"> Add New Team </button>
			</div>

		</section>
	`
 }