import React, { Component } from 'react';
import PropTypes from "prop-types";

import PitchBattles from '../images/pitchbattles.png'
import '../styles/App.css';

class Projects extends Component {
  
  render() {
    return (
      <div className="App-body">
        <h1>
          Projects
        </h1>
        <div
          className='project-left'
        >
        <img
          className='project-image'
          src={PitchBattles}
          alt='Pitch Battles'
        >
        </img>
        <p>
          Pitch Battles was my capstone project at Turing School of Software and Design. 
        </p>
        </div>

        <div
          className='project-right'
        >
        <p>
          Pitch Battles was my capstone project at Turing School of Software and Design. 
        </p>
        <img
          className='project-image'
          src={PitchBattles}
          alt='Pitch Battles'
        >
        </img>
        </div>



      </div>
    );
  }
}

export default Projects;

Projects.propTypes = {
  navigate: PropTypes.func
};
