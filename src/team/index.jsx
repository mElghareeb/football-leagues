import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import TeamDiscription from './teamDiscription';
import GameCard from './gameCard';
import { getTeamData } from '../actions/teamActions'

const mapDispatchToProps = dispatch => {
    return {
        TeamData: (teamId) => {
            dispatch(getTeamData(teamId))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        teamData: state.teamData
    };
};

class Team extends Component {
    componentDidMount() {
        const { teamId } = this.props.match.params;
        this.props.TeamData(teamId);
    }

    render() {
        const { teamData } = this.props;
        return (
            <React.Fragment>
                <Container className='football-leagues-container'>
                    {teamData.isLoading ? <CircularProgress /> :
                        <div>
                            {teamData.squad && <TeamDiscription teamData={teamData} />}

                            <h1>Games</h1>

                            <div className="team-cards-container">
                                {teamData.squad && teamData.squad.map((game, i) => {
                                    return <GameCard key={i} game={game} />
                                })}
                            </div>
                        </div>
                    }
                </Container>
            </React.Fragment>
                );
            }
        }
        export default connect(mapStateToProps, mapDispatchToProps)(Team);
