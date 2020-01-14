import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainToolbar from './components/MainToolbar';
import Profile from './containers/Profile';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Franz Noel Tanglao",
    };
  }

  render() {
    return (
      <div>
        <MainToolbar title={this.state.title}></MainToolbar>
        <Router>
          <Switch>
            <Route path="/" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
