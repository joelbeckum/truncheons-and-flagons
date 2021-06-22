let applicationState = {
    teams: [],
    players: [],
    teamPlayerList: [],
    scores: [],
    games: []
}

const mainContainer = document.querySelector(".container");

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

export const sendTeam = teamData => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teamData)
    }

    return fetch(`${API}/teams`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendPlayer = playerData => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playerData)
    }

    return fetch(`${API}/players`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendTeamPlayerList = teamPlayerListData => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teamPlayerListData)
    }

    return fetch(`${API}/teamPlayerList`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendScore = scoreData => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(scoreData)
    }

    return fetch(`${API}/scores`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendGame = gameData => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(gameData)
    }

    return fetch(`${API}/games`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

