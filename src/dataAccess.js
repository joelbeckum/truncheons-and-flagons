let applicationState = {
    teams: [],
    players: [],
    teamPlayerList: [],
    scores: [],
    games: []
}

const API = "http://localhost:8088"

export const fetchExternalData = () => {
    return Promise.all([
        fetch(`${API}/teams`),
        fetch(`${API}/players`),
        fetch(`${API}/teamPlayerList`),
        fetch(`${API}/scores`),
        fetch(`${API}/games`)
    ]).then(responses => {
        return Promise.all(responses.map(response => {
            return response.json()
        }))
    }).then(externalData => {
        applicationState.teams = externalData[0]
        applicationState.players = externalData[1]
        applicationState.teamPlayerList = externalData[2]
        applicationState.scores = externalData[3]
        applicationState.games = externalData[4]
    })
}

export const getTeams = () => {
    return applicationState.teams.map(team => ({...team}))
}

export const getPlayers = () => {
    return applicationState.players.map(player => ({...player}))
}

export const getTeamPlayerList = () => {
    return applicationState.teamPlayerList.map(playerListItem => ({...playerListItem}))
}

export const getScores = () => {
    return applicationState.scores.map(score => ({...score}))
}

export const getGames = () => {
    return applicationState.games.map(game => ({...game}))
}
