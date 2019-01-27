import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';
import Github from '../images/github-logo.svg';
import Email from '../images/email-logo.svg';
import Instagram from '../images/instagram-logo.svg';
import LinkedIn from '../images/linkedin-logo.svg';

class Connect extends Component {
  
  render() {
    return (
      <div className="App-body">
        <h1>
          Connect
        </h1>
        <div>
          <a href='https://github.com/dmeskis'>
            <img 
              className='social-icon'
              src={Github}
              alt='Github'>
            </img>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/dmeskis/'>
            <img
              className='social-icon' 
              src={LinkedIn} 
              alt='LinkedIn'>
            </img>
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/dmeskis'>
            <img 
              className='social-icon' 
              src={Instagram} 
              alt='Instagram'>
            </img>
          </a>
        </div>
        <div>
          <a href='mailto:dmeskis@gmail.com?subject=To my favorite software developer'>
            <img 
              className='social-icon' 
              src={Email} 
              alt='Email'>
            </img>
          </a>
        </div>
      </div>
    );
  }
}

export default Connect;

Connect.propTypes = {
  navigate: PropTypes.func
};
