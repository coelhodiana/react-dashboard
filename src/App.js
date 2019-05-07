import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Summary from './components/Summary/Summary.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Summary/>
      </div>
    );
  }
}

export default App;
