import React, { Component } from 'react';
import { Link } from 'react-router-dom'; import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class LeagueCard extends Component {

    render() {
        const { league } = this.props;
        return (
            <div >
                <Paper className='league-card-container'>
                    <Grid container spacing={2} className='league-card'>
                        <Grid item>
                            <ButtonBase>
                                <img className='league-image' alt="logo" src="https://vignette.wikia.nocookie.net/thejackie/images/6/66/Premier-League-Logo.png/revision/latest/scale-to-width-down/1000?cb=20131024155152" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={10} sm container className='league-data-container'>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" className='league-title'>
                                        {league.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        number Of Available Seasons: {league.numberOfAvailableSeasons ? league.numberOfAvailableSeasons : 0}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        current Match Day: {league.currentSeason ? league.currentSeason.currentMatchday : 0}
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid item className='detalis-btn-container'>
                                <Link to={`/Leagues/${league.id}`}>
                                    <Button variant="contained" color="primary">
                                        Details
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}