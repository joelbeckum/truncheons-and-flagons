import { StatTicker } from "./StatTicker/statTicker.js"
import { startGamePage } from "./Games/startGame.js"
import { AddNewPlayer } from "./Players/addNewPlayer.js"
import { AddNewTeam } from "./Teams/addNewTeam.js"

// const mainContainer = document.querySelector(".container")


export const Truncheons = () => {
    return `
    <header><h1>Truncheons and Flagons</h1></header>

    <div class="ticker_wrapper">
      <section class="stat_ticker">
        ${StatTicker()}
      </section>
    </div>

    <section class="button_bar_wrapper">
        <div><button id="add_player">Add Player</button></div>
        <div class="current_game_label">Choose To Play</div>
        <div><button id="add_team">Add Team</button></div>
      </section>

      <article class="container">
        ${startGamePage()}
      </article>
      
      <article class="scoreboard">
        <div class="team_wrapper">
          <div id="team_1_scoreboard" class="team_score">0</div>
          <div id="chosenTeam1" class="team_score_label">Team 1</div>
        </div>
        <div class="team_wrapper">
          <div id="team_2_scoreboard" class="team_score">0</div>
          <div id="chosenTeam2" class="team_score_label">Team 2</div>
        </div>
        <div class="team_wrapper">
          <div id="team_3_scoreboard" class="team_score">0</div>
          <div id="chosenTeam3" class="team_score_label">Team 3</div>
        </div>
      </article>
    `
}

document.addEventListener("click", (event) => {
    if (event.target.id === "add_team") {
      const mainContainer = document.querySelector(".container")  
      mainContainer.innerHTML = AddNewTeam();
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target.id === "add_player") {
      const mainContainer = document.querySelector(".container")
      mainContainer.innerHTML = AddNewPlayer();
    }
  });