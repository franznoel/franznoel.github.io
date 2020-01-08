import React, { Component } from 'react';
import MainToolbar from './components/MainToolbar';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Franz Noel Tanglao"
    };
  }

  render() {
    return (
      <div>
        <MainToolbar title={this.state.title}></MainToolbar>
      </div>
    );
  }
}

export default App;
