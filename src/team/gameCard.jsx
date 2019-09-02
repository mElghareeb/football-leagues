import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class GameCard extends Component {
    render() {

        const { game } = this.props;
        return (

            <Grid item xs={12} sm={6} lg={6} className='team-card-container'>
                <Card className='team-card'>
                    <div>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {game.name}
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                            position: {game.position}
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                            nationality: {game.nationality}
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                            role: {game.role}
                            </Typography>
                        </CardContent>

                    </div>
                    <img className='team-image' alt="logo" src="https://vignette.wikia.nocookie.net/thejackie/images/6/66/Premier-League-Logo.png/revision/latest/scale-to-width-down/1000?cb=20131024155152" />
                </Card>
            </Grid>
        );
    }
}