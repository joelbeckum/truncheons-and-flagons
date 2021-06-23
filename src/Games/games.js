import { EnterGameScores } from "./EnterGameScore.js";
import { applicationState, getTeams, sendGame } from "../dataAccess.js";

// generate the html for adding choose_teams dropdown that is called from the click event listener of the start game button


export const ChooseTeams = () => {
  const teams = getTeams();
  return `
	<div class="choose_teams_wrapper">
	<section class="choose_teams"> 
		<form >
			<div>
			<label class="player_team_picker_label">Choose Team 1:</label>
			<select class="team_player_picker" name="player_team_picker" id="player_team_picker_1">
			${teams
        .map((team) => `<option value="${team.id}">${team.teamName}</option>`)
        .join("")}
			</select><br><br>
			</div>
			<div>	
			<label class="player_team_picker_label">Choose Team 2:</label>
			<select class="team_player_picker" name="player_team_picker" id="player_team_picker_2">
			${teams
        .map((team) => `<option value="${team.id}">${team.teamName}</option>`)
        .join("")}  
			</select><br><br>
			</div>
			<div>	
			<label class="player_team_picker_label">Choose Team 3:</label>
			<select class="team_player_picker" name="player_team_picker" id="player_team_picker_3">
			${teams
        .map((team) => `<option value="${team.id}">${team.teamName}</option>`)
        .join("")} 
			</select><br><br>
			</div>	
		</form>
		<button id="submit_chosen_teams"> Choose Teams </button>
	</section>
	</div>
	`;
};

const mainContainer = document.querySelector(".container");

document.addEventListener("click", (event) => {
  if (event.target.id === "submit_chosen_teams") {
    const teams = getTeams();

    const team1Id = parseInt(
      document.getElementById("player_team_picker_1").value
    );
    const team2Id = parseInt(
      document.getElementById("player_team_picker_2").value
    );
    const team3Id = parseInt(
      document.getElementById("player_team_picker_3").value
    );

    if (team1Id === team2Id || team1Id === team3Id || team2Id === team3Id) {
      window.alert(
        "You cant choose 2 of the same teams. Please select Unique teams."
      );
      return;
    } else {
      const playingTeam1Obj = teams.find((team) => team.id === team1Id);
      const playingTeam2Obj = teams.find((team) => team.id === team2Id);
      const playingTeam3Obj = teams.find((team) => team.id === team3Id);

      //send teams chosen to the games array in json database
      // use sendGame() need to update send game with the proper URL/games


      const sendToAPI = {
        teamOneId: team1Id,
        teamTwoId: team2Id,
        teamThreeId: team3Id,
      };

      applicationState.isPlaying.isPlaying = true

      sendGame(sendToAPI);

      

      mainContainer.innerHTML = EnterGameScores(
        playingTeam1Obj,
        playingTeam2Obj,
        playingTeam3Obj
      );
    }
  }
});
