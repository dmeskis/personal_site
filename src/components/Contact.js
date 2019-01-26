import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';
import Github from '../images/github-logo.svg';
import Google from '../images/google-logo.svg';
import Instagram from '../images/instagram-logo.svg';
import LinkedIn from '../images/linkedin-logo.svg';
import Twitter from '../images/twitter-logo.svg';
class Contact extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1>
            Contact
          </h1>
          <div>
            <h5>
              Github
            </h5>
            <img class='social-icon' src={Github} alt='Github'></img>
          </div>
          <div>
            <h5>
              LinkedIn
            </h5>
            <img class='social-icon' src={LinkedIn} alt='LinkedIn'></img>
          </div>
          <div>
            <h5>
              Instagram
            </h5>
            <img class='social-icon' src={Instagram} alt='Instagram'></img>
          </div>
          <div>
            <h5>
              Google
            </h5>
            <img class='social-icon' src={Google} alt='Google'></img>
          </div>
          <button
            onClick={() => {
              this.props.navigate("");
              }}>
            Home
          </button>
          <button
            onClick={() => {
              this.props.navigate("AboutMe");
              }}>
            About Me
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
  navigate: PropTypes.func
};
