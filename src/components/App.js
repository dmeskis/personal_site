import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Dylan Meskis
          </h1>
          <h3>
            Software Developer
          </h3>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
