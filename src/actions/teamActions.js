export function setLoading(loading) {
    return {
        type: 'GET_TEAM_IS_LOADING',
        isLoading: loading,
    };
}

export function setTeamData(teamData) {
    return {
        type: 'SET_TEAM_DATA',
        payload: teamData,
    };
}

export function getTeamData(teamId) {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch(`https://api.football-data.org/v2/teams/${teamId}`).then(response => response.json())
        .then((data) => {
            dispatch(setLoading(false))
            dispatch(setTeamData(data));
        }).catch((err) => {
            dispatch(setLoading(false))
            console.log("error", err)
        });

    };
}