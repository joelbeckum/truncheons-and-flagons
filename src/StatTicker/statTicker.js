import { getScores } from "../dataAccess.js";
import { getTeams } from "../dataAccess.js";

export const StatTicker = () => {
  const teams = getTeams();
  const scores = getScores();
  let html = "";
  for (const team of teams) {
    const filteredTeamScores = scores.filter(
      (scores) => scores.teamId === team.id
    );

    const teamsRecord = filteredTeamScores.length;

    const totalTeamWins = filteredTeamScores.filter(
      (scores) => scores.didWin === true
    );

    const totalTeamLosses = teamsRecord - totalTeamWins.length;

    html += `
    <div class="team_stat" id="${team.id}">
    ${team.teamName}: ${teamsRecord} - ${totalTeamLosses} </div>`;
  }
  return html;
};

const statTicker = document.querySelector(".stat_ticker");

statTicker.innerHTML = StatTicker();
