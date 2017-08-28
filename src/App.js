import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import Work from './pages/Work'
import About from './pages/About'
import Photography from './pages/Photography'

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path="/" render={() => ( <Redirect to="/home"/> )}/>
            <Route path='/home' component={Work} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/photography' component={Photography} />
          </Switch>
      </div>
    );
  }
}

export default App;
