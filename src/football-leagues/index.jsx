import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import LeagueCard from './leagueCard';
import { getLeaguesAction } from '../actions/leaguesActoins'
import './style.scss'

const mapDispatchToProps = dispatch => {
    return {
        LeaguesData: () => {
            dispatch(getLeaguesAction())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        leagues: state.leagues
    };
};

class FootballLeagues extends Component {
    componentDidMount() {
        this.props.LeaguesData();
    }
    render() {
        const { leagues } = this.props;
        return (
            <React.Fragment>
                <Container className='football-leagues-container'>
                    {leagues.isLoading ? <CircularProgress /> :
                        <div>
                            {leagues.competitions && leagues.competitions.map((league, i) => {
                                return <LeagueCard key={i} league={league} />
                            })}
                        </div>
                    }
                </Container>
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FootballLeagues);
