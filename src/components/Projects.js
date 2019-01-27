import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';

class Projects extends Component {
  
  render() {
    return (
      <div className="App-body">
        <h1>
          Projects
        </h1>
      </div>
    );
  }
}

export default Projects;

Projects.propTypes = {
  navigate: PropTypes.func
};
