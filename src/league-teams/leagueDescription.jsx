import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class LeagueCard extends Component {

    render() {
        const { competition } = this.props;
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
                                        {competition.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    start Date: {competition.season ? competition.season.startDate : 0}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        current Match Day: {competition.season ? competition.season.endDate : 0}
                                    </Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}