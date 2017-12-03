import React, { Component } from 'react';
import './App.css';
import './Vendor.css'
import './Base.css'
import {Header} from './Components/Partials/Header'
import Home from './Components/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
