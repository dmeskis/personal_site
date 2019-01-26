import React, { Component } from 'react';

import logo from '../logo.svg';
import AboutMe from './AboutMe'
import Contact from './Contact'
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: ""
    };
  }

  // Method for changing between pages
  navigate = location => {
    this.setState({
      activePage: location
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.activePage === "" && (
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
                <button
                  onClick={() => {
                    this.navigate("AboutMe")
                    }}
                  >
                  About Me
                </button>
                <button
                  onClick={() => {
                    this.navigate("Contact")
                    }}
                  >
                  Contact
                </button>
              </header>
        )}
        {this.state.activePage === "AboutMe" && (
          <AboutMe navigate={this.navigate}/>
        )}
        {this.state.activePage === "Contact" && (
          <Contact navigate={this.navigate}/>
        )}

      </div>
    );
  }
}

export default App;
