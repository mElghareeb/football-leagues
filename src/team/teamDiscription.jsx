import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class TeamDiscription extends Component {

    render() {
        const { teamData } = this.props;
        return (
            <div >
                <Paper className='league-card-container'>
                    <Grid container spacing={2} className='league-card'>
                        <Grid item>
                            <ButtonBase>
                                <img className='league-image' alt="logo" src={teamData.crestUrl} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={10} sm container className='league-data-container'>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" className='league-title'>
                                        {teamData.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Phone: {teamData.phone}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        email: {teamData.email}
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