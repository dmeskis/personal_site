import React, { Component } from 'react';

import logo from '../logo.svg';
import Navbar from './Navbar';
import Welcome from './Welcome'
import Projects from './Projects'
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
        <Navbar navigate={this.navigate}/>
        {this.state.activePage === "" && (
          <Welcome navigate={this.navigate}/>
        )}
        {this.state.activePage === "AboutMe" && (
          <AboutMe navigate={this.navigate}/>
        )}
        {this.state.activePage === "Contact" && (
          <Contact navigate={this.navigate}/>
        )}
        {this.state.activePage === "Projects" && (
          <Projects navigate={this.navigate}/>
        )}
      </div>
    );
  }
}

export default App;
