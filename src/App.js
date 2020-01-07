import React, { Component } from 'react';
import MainToolbar from './components/MainToolbar';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainToolbar></MainToolbar>
      </div>
    );
  }
}

export default App;
