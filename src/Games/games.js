import { EnterGameScores } from "./EnterGameScore.js";

// generate the html for adding choose_teams dropdown that is called from the click event listener of the start game button
export const ChooseTeams = () => {
  return `
	<section class="choose_teams"> 
		<form >
			<label for="choose_team">Choose Team 1:</label>
			<select name="player_team_picker" id="player_team_picker">
			<option value="{teamId}">Map the teams and filter based on who is not full.</option>  
			</select><br><br>	
			<label for="choose_team">Choose Team 2:</label>
			<select name="player_team_picker" id="player_team_picker">
			<option value="{teamId}">Map the teams and filter based on who is not full.</option>  
			</select><br><br>	
			<label for="choose_team">Choose Team 3:</label>
			<select name="player_team_picker" id="player_team_picker">
			<option value="{teamId}">Map the teams and filter based on who is not full.</option>  
			</select><br><br>	
		</form>
		<button id="submit_chosen_teams"> Choose Teams </button>
	</section>
	`;
};

const mainContainer = document.querySelector(".container");

document.addEventListener("click", (event) => {
  if (event.target.id === "submit_chosen_teams") {
    mainContainer.innerHTML = EnterGameScores();
  }
});
