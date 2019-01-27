import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';
import HeadShot from '../images/my_headshot.jpg';

class AboutMe extends Component {
  
  render() {
    return (
      <div className="App-body">
        <img
          className='headshot'
          src={HeadShot}
          alt='bananas'>
        </img>
        <h1>
          About me
        </h1>
        <p>
          Lorem ipsum dolores wallaby great gatsby flying monkey hidden dragon.
        </p>
      </div>
    );
  }
}

export default AboutMe;

AboutMe.propTypes = {
  navigate: PropTypes.func
};
