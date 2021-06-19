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
	
	const teams = getTeams()

	const team1Id = parseInt(document.getElementById("player_team_picker_1").value)
	const team2Id = parseInt(document.getElementById("player_team_picker_2").value)
	const team3Id = parseInt(document.getElementById("player_team_picker_3").value)

	const playingTeam1Obj = teams.find(team => team.id === team1Id)
	const playingTeam2Obj = teams.find(team => team.id === team2Id)
	const playingTeam3Obj= teams.find(team => team.id === team3Id)
	
	const playingTeam1Name = playingTeam1Obj.teamName
	const playingTeam2Name = playingTeam2Obj.teamName
	const playingTeam3Name = playingTeam3Obj.teamName

	console.log(team1Id, team2Id, team3Id, playingTeam1Name, playingTeam2Name, playingTeam3Name )

    mainContainer.innerHTML = EnterGameScores(playingTeam1Obj, playingTeam2Obj, playingTeam3Obj);

    
  }
});
