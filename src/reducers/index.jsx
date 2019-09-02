import { combineReducers } from 'redux';
import { LeaguesReducer } from './leaguesReducer';
import { LeagueTeamReducer } from './leagueTeamsReducer';
import { TeamReducer } from './teamReducer';

export const reducers = combineReducers({
    leagues:LeaguesReducer,
    leagueTeams: LeagueTeamReducer,
    teamData: TeamReducer
});
