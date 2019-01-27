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
        <div
          className='project-description'>
          <p>
          Pitch Battles is a desktop web application designed as a training tool for musicians to practice and learn reading pitches. It was designed specifically with young musicians in mind as a way to keep this learning process fun and engaging. I worked with Kevin Simpson and Haley Jacobs, two developers in the front-end program, to create Pitch Battles. My job as the lone back-end developer involved building out a seperate back-end application for handling data, authorization, and post-game analysis.
          </p>
        </div>
        </div>

        <div
          className='project-right'
        >
        <img
          className='project-image'
          src={PitchBattles}
          alt='Pitch Battles'
        >
        </img>
        <p className='project-description'>
          Pitch Battles was my capstone project at Turing School of Software and Design. 
        </p>
 
        </div>



      </div>
    );
  }
}

export default Projects;

Projects.propTypes = {
  navigate: PropTypes.func
};
