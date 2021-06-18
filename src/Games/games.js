import { EnterGameScores } from "./EnterGameScore.js";
import { getTeams} from "../dataAccess.js"

// generate the html for adding choose_teams dropdown that is called from the click event listener of the start game button
export const ChooseTeams = () => {

	const teams = getTeams()
  return `
	<section class="choose_teams"> 
		<form >
			<label>Choose Team 1:</label>
			<select name="player_team_picker" id="player_team_picker_1">
			${teams.map((team) => `<option value="${team.id}">${team.teamName}</option>`).join("") }
			</select><br><br>	
			<label>Choose Team 2:</label>
			<select name="player_team_picker" id="player_team_picker_2">
			${teams.map((team) => `<option value="${team.id}">${team.teamName}</option>`).join("") }  
			</select><br><br>	
			<label>Choose Team 3:</label>
			<select name="player_team_picker" id="player_team_picker_3">
			${teams.map((team) => `<option value="${team.id}">${team.teamName}</option>`).join("") } 
			</select><br><br>	
		</form>
		<button id="submit_chosen_teams"> Choose Teams </button>
	</section>
	`;
};

const mainContainer = document.querySelector(".container");

document.addEventListener("click", (event) => {
  if (event.target.id === "submit_chosen_teams") {
	let totalTeam1Score = 0
	let totalTeam2Score = 0
	let totalTeam3Score = 0

	const team1 = document.getElementById("player_team_picker_1").value
	const team2 = document.getElementById("player_team_picker_2").value
	const team3 = document.getElementById("player_team_picker_3").value

	totalTeam1Score += team1

	console.log(team1, team2, team3, )

    mainContainer.innerHTML = EnterGameScores();

    
  }
});
