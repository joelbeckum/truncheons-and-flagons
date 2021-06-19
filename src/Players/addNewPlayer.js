import { startGamePage } from "../Games/startGame.js"
import {getTeams} from "../dataAccess.js"

// generate the html for adding a new player that is called from the click event listener of the add player button
export const AddNewPlayer = () => {

	const teams = getTeams()
	
	return `
	<section class="player_info_input"> 
		<form class="add_new_player_form">
			<div class="player_option">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName"><br><br>
			</div>
			<div class="player_option">
				<label class="player_input" for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName"><br><br>
			</div>
			<div class="player_option">
				<label for="choose_team">Choose a Team:</label>
				<select name="player_team_picker" id="player_team_picker">
				${teams.map((team) => `<option value="${team.id}">${team.teamName}</option>`).join("") }
				</select>	
			</div>
		</form>
		<button id="submit_new_player"> Add New Player </button>
	</section>
	`
}

const mainContainer = document.querySelector(".container")

document.addEventListener("click",(event) => {
	if (event.target.id === "submit_new_player"){

		const firstName = document.getElementById("firstName").value
		const lastName = document.getElementById("lastName").value
		const playerTeam = document.getElementById("player_team_picker").value
		
		mainContainer.innerHTML = startGamePage()
		console.log("submit new player is connected", firstName, lastName, playerTeam)
	}
} )