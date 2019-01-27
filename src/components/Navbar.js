import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';

class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar">
        <a
          className="nav-link"
          onClick={() => {
            this.props.navigate("");
            }}
        >
          Home
        </a>
        <a
          className="nav-link"
          onClick={() => {
            this.props.navigate("Projects");
            }}
        >
          Projects
        </a>
        <a
          className="nav-link"
          onClick={() => {
            this.props.navigate("AboutMe");
            }}
        >
          About Me
        </a>
        <a
          className="nav-link"
          onClick={() => {
            this.props.navigate("Contact");
            }}
        >
          Contact
        </a>
      </div>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  navigate: PropTypes.func
};
