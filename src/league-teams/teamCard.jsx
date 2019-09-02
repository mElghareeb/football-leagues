import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class TeamCard extends Component {
    render() {
        const { team } = this.props;
        return (
            
            <Grid item xs={12} sm={6} lg={4} className='team-card-container'>
                <Link to={`/teams/${team.id}`}>
                <Card className='team-card'>
                    <div>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {team.name}
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                phones: {team.phone}
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                email: {team.email}
                            </Typography>
                        </CardContent>

                    </div>
                    <img className='team-image' alt="logo" src="https://vignette.wikia.nocookie.net/thejackie/images/6/66/Premier-League-Logo.png/revision/latest/scale-to-width-down/1000?cb=20131024155152" />
                </Card>
                </Link>
            </Grid>
        );
    }
}