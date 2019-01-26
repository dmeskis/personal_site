import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';
import HeadShot from '../images/my_headshot.jpg';

class AboutMe extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <h1>
            About me
          </h1>
          <img src={HeadShot} alt='bananas'></img>
          <p>
            Lorem ipsum dolores wallaby great gatsby flying monkey hidden dragon.
          </p>
        </header>
        <button
          onClick={() => {
            this.props.navigate("");
            }}>
          Home
        </button>
      </div>
    );
  }
}

export default AboutMe;

AboutMe.propTypes = {
  navigate: PropTypes.func
};
