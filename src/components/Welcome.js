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
      </header>
    );
  }
}

export default Welcome;

Welcome.propTypes = {
  navigate: PropTypes.func
};
