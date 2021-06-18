
// generate the html for adding a new player that is called from the click event listener of the add player button
export const AddNewPlayer = () => {
	
	return `
	<section class="player_info_input"> 
		<form >
			<label for="firstName">First name:</label>
			<input type="text" id="firstName" name="firstName"><br><br>
			<label for="lastName">Last name:</label>
			<input type="text" id="LastName" name="lastName"><br><br>
			
		</form>
		<button id="submit_new_player"> Add New Player </button>
	</section>
	`
}

// const mainContainer = document.querySelector(".container")

document.addEventListener("click",(event) => {
	if (event.target.id === "submit_new_player"){
		console.log("submit new player is connected")
	}
} )