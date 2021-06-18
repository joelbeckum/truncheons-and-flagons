import { startGamePage } from "./Games/startGame.js";


console.log("Mother of Dragons is alive!!!");

const mainContainer = document.querySelector(".container")

const render = () => {
 
mainContainer.innerHTML = startGamePage()
  
};

render();