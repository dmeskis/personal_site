import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';

class Welcome extends Component {
  
  render() {
    return (
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
            this.props.navigate("AboutMe");
            }}
          >
          About Me
        </button>
        <button
          onClick={() => {
            this.props.navigate("Contact");
            }}
          >
          Contact
        </button>
      </header>
    );
  }
}

export default Welcome;

Welcome.propTypes = {
  navigate: PropTypes.func
};
