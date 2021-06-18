export const startGamePage = () => {
	return '<div class="button_wrapper_start"><button id="start_game" class="start_game_button">Start Game</button></div>'
}

document.addEventListener("click",(event) => {
	if (event.target.id === "start_game"){
		console.log("The start game button is connected")
	}
} )