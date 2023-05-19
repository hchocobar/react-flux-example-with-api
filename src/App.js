import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {About} from "./components/About";
import {Services} from "./components/Services";
import {Contact} from "./components/Contact";
import injectContext from "./store/appContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <About/>
        <Services/>
        <Contact/>
      </div>
    );
  }
}

export default injectContext(App);
