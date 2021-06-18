import { startGamePage } from "./Games/startGame.js";


console.log("Mother of Dragons is alive!!!");

const mainContainer = document.querySelector(".container")

const render = () => {
 
mainContainer.innerHTML = startGamePage()
  
};

render();



document.addEventListener("click",(event) => {
	if (event.target.id === "add_team"){
		console.log("The Add team button is connected")
	}
} )
document.addEventListener("click",(event) => {
	if (event.target.id === "add_player"){
		console.log("The Add player button is connected")
	}
} )