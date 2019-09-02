import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import LeagueDescription from './leagueDescription';
import TeamCard from './teamCard';
import { getLeagueTeams } from '../actions/leagueTeamsActions'
import './style.scss'

const mapDispatchToProps = dispatch => {
    return {
        LeagueTeamsData: (leagueId) => {
            dispatch(getLeagueTeams(leagueId))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        leagueTeams: state.leagueTeams
    };
};

class LeagueTeams extends Component {
    componentDidMount() {
        const { leagueId } = this.props.match.params;
        this.props.LeagueTeamsData(leagueId);
    }

    render() {
        const { leagueTeams } = this.props;
        return (
            <React.Fragment>
                <Container className='football-leagues-container'>
                    {leagueTeams.isLoading ? <CircularProgress /> :
                        <div>
                            {leagueTeams.competition && <LeagueDescription competition={leagueTeams.competition} />}
                            <div className="team-cards-container">
                                {leagueTeams.teams && leagueTeams.teams.map((team, i) => {
                                    return <TeamCard key={i} team={team} />
                                })}
                            </div>
                        </div>
                    }
                </Container>
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeagueTeams);
