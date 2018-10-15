import React, { Component } from 'react';
import './App.css';
// import Picker from './components/Picker'
import DateSearch from './components/DateSearch'
import APhoto from './components/APhoto'

class App extends Component {


  render() {
    return (
      <div className="App">
      <h1>NASA API</h1>
        <DateSearch />
        <br></br> <h2>OR</h2>
        <APhoto />

      </div>
    );
  }
}

export default App;
