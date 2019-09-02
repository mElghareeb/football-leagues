import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {

    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon />
                <Typography variant="h6" color="inherit" noWrap>
                    Football Leagues
          </Typography>
            </Toolbar>
        </AppBar>
    );
}