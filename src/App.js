import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Summary from './components/Summary/Summary.jsx';
import Appointments from './components/Appointments/Appointments';
import Revenue from './components/Revenue/Revenue'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component={ Summary } />
                <Route path="/consultas" component={ Appointments } />
                <Route path="/faturamento" component={ Revenue }/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
