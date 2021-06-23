import { applicationState, getGames, sendScore } from "../dataAccess.js";
import { FinalScoreDisplay } from "./FinalScoreDisplay.js";

export const EnterGameScores = (playingTeam1, playingTeam2, playingTeam3) => {
  chosenTeam1 = playingTeam1;
  chosenTeam2 = playingTeam2;
  chosenTeam3 = playingTeam3;
  setScoreBoard();

  return `
	
	 <section class="enter_scores_wrapper">
	 	<form class="enter_scores>
		 	<div>
			<label for="team_1_score">${playingTeam1.teamName}</label><div></div>
			<input  class="input_score" type="number" id="team_1_score" name="team_1_score"></div>
			<div>
			<label for="team_2_score">${playingTeam2.teamName}</label><div></div>
			<input  class="input_score"type="number" id="team_2_score" name="team_2_score">
			</div>
			<div>
			<label for="team_3_score">${playingTeam3.teamName}</label><div></div>
			<input 	 class="input_score" type="number" id="team_3_score" name="team_3_score">
			</div>	
		</form>
		<button id="submit_round_score"> Submit Score </button>
	 
	 </section>
	
	 `;
};

const submitRoundScores = () => {
  teamScore1 = parseInt(document.getElementById("team_1_score").value);
  teamScore2 = parseInt(document.getElementById("team_2_score").value);
  teamScore3 = parseInt(document.getElementById("team_3_score").value);

  if (
    Number.isNaN(teamScore1) ||
    Number.isNaN(teamScore2) ||
    Number.isNaN(teamScore3) ||
    teamScore1 < 0 ||
    teamScore2 < 0 ||
    teamScore3 < 0
  ) {
    // CHANGE THIS TO A CLEANER INTERFACE POSSIBLY MODAL
    window.alert("These scores are not valid. Please Log a valid score.");
  } else {
    totalTeam1Score += teamScore1;
    totalTeam2Score += teamScore2;
    totalTeam3Score += teamScore3;
    round++;
  }
};

export const setScoreBoard = () => {
  document.getElementById("team_1_scoreboard").innerHTML = totalTeam1Score;
  document.getElementById("team_2_scoreboard").innerHTML = totalTeam2Score;
  document.getElementById("team_3_scoreboard").innerHTML = totalTeam3Score;
  document.getElementById("chosenTeam1").innerHTML = chosenTeam1.teamName;
  document.getElementById("chosenTeam2").innerHTML = chosenTeam2.teamName;
  document.getElementById("chosenTeam3").innerHTML = chosenTeam3.teamName;
};

const mainContainer = document.querySelector(".container");
let round = 1;

export let totalTeam1Score = 0;
export let totalTeam2Score = 0;
export let totalTeam3Score = 0;
let teamScore1 = 0;
let teamScore2 = 0;
let teamScore3 = 0;
let winnerName = "";
let chosenTeam1 = {};
let chosenTeam2 = {};
let chosenTeam3 = {};

let team1FinalScoreObj = {};
let team2FinalScoreObj = {};
let team3FinalScoreObj = {};

document.addEventListener("click", (event) => {
  if (event.target.id === "submit_round_score") {
    const currentGameList = getGames();
    const currentGameId = currentGameList.length + 1;

    team1FinalScoreObj.gameId = currentGameId;
    team2FinalScoreObj.gameId = currentGameId;
    team3FinalScoreObj.gameId = currentGameId;

    team1FinalScoreObj.teamId = chosenTeam1.id;
    team2FinalScoreObj.teamId = chosenTeam2.id;
    team3FinalScoreObj.teamId = chosenTeam3.id;

    if (round < 3) {
      submitRoundScores();
      setScoreBoard();
      mainContainer.innerHTML = EnterGameScores(
        chosenTeam1,
        chosenTeam2,
        chosenTeam3
      );
      return;
    } else {
      submitRoundScores();

      // set final score in the final score obj for each team

      team1FinalScoreObj.score = totalTeam1Score;
      team2FinalScoreObj.score = totalTeam2Score;
      team3FinalScoreObj.score = totalTeam3Score;

      //find the winning score of the game
      // set a boolean of didWin on the score for that team

      if (totalTeam1Score > Math.max(totalTeam2Score, totalTeam3Score)) {
        winnerName = chosenTeam1.teamName;
        team1FinalScoreObj.didWin = true;
      } else if (totalTeam2Score > Math.max(totalTeam1Score, totalTeam3Score)) {
        winnerName = chosenTeam2.teamName;
        team2FinalScoreObj.didWin = true;
      } else if (totalTeam3Score > Math.max(totalTeam2Score, totalTeam1Score)) {
        winnerName = chosenTeam3.teamName;
        team3FinalScoreObj.didWin = true;
      } else {
        setScoreBoard();
        mainContainer.innerHTML = EnterGameScores(
          chosenTeam1,
          chosenTeam2,
          chosenTeam3
        );
        console.log("The Game is a tie! You must battle to the death!");
        return;
      }

      // need to push scores to the database here before they get reset for them new game

      // send all three team scores to the the scores array
      // use sendScores() to and update send scores with URL/scores

      sendScore(team1FinalScoreObj)
        .then(() => sendScore(team2FinalScoreObj))
        .then(() => sendScore(team3FinalScoreObj));

      setScoreBoard();

      // Reset the total team score counter back to 0
      totalTeam1Score = 0;
      totalTeam2Score = 0;
      totalTeam3Score = 0;
      round = 1;
      team1FinalScoreObj = {
        didWin: false,
      };
      team2FinalScoreObj = {
        didWin: false,
      };
      team3FinalScoreObj = {
        didWin: false,
      };
      //       document.dispatchEvent(new CustomEvent("stateChanged"))

      applicationState.isPlaying.isPlaying = false;
      mainContainer.innerHTML = FinalScoreDisplay(winnerName);

      // Push data game data to the database
    }
  }
});
