import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Summary from './components/Summary/Summary.jsx';
import Appointments from './components/Appointments/Appointments';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Summary/>
        <Appointments/>
      </div>
    );
  }
}

export default App;
