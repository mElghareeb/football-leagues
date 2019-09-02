import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FootballLeagues from '../football-leagues';
import LeagueTeams from '../league-teams';
import Team from '../team';
import Header from './components/header';
import Footer from './components/footer';

export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route path={"/Leagues/:leagueId"} component={LeagueTeams} />
            <Route path={"/teams/:teamId"} component={Team} />
            <Route path={["/", "/Leagues"]} component={FootballLeagues} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}



