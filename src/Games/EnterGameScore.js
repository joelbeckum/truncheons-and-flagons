export const EnterGameScores = () => {
  return `
	 <section>
	 	<form >
			<label for="team_1_score">{Team 1 Name Placeholder}</label>
			<input type="number" id="team_1_score" name="team_1_score"><br><br>
			<label for="team_2_score">{Team 2 Name Placeholder}</label>
			<input type="number" id="team_2_score" name="team_2_score"><br><br>
			<label for="team_3_score">{Team 3 Name Placeholder}</label>
			<input type="number" id="team_3_score" name="team_3_score"><br><br>
		
		</form>
		<button id="submit_round_score"> Submit Score </button>
	 
	 </section>
	 `;
};
