import React, { Component } from 'react';
import './App.css';
import NavBar from './views/NavBar';
import CountriesList from './views/CountriesList';
import SingleCountryView from './views/SingleCountryView';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MissingPageView from './views/MissingPage';
import HomeView from './views/HomeView';

import data from './countries.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: data,
    };
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar>
            <Link to="/">Home</Link>
            <Link to="/countries">Countries</Link>
          </NavBar>
          <div className="page">
            <div className="countriesList">
              <CountriesList countries={this.state.countryData} />
            </div>

            <Switch>
              <Route path="/" component={HomeView} exact />
              <Route path="/countries" component={CountriesList} exact />
              <Route
                path="/countries/:id"
                component={SingleCountryView}
                exact
              />
              <Route path="/" component={MissingPageView} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
