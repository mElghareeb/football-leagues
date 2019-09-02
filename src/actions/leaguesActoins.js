export function setLoading(loading) {
    return {
        type: 'GET_LEAGUES_DATA_IS_LOADING',
        isLoading: loading,
    };
}

export function setLeaguesData(leaguesData) {
    return {
        type: 'SET_LEAGUES_DATA',
        payload: leaguesData,
    };
}

export function getLeaguesAction() {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch(`http://api.football-data.org/v2/competitions`).then(response => response.json())
        .then((data) => {
            dispatch(setLoading(false))
            dispatch(setLeaguesData(data));
        }).catch((err) => {
            dispatch(setLoading(false))
            console.log("error", err)
        });

    };
}