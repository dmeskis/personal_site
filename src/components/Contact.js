import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../styles/App.css';

class Contact extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1>
            Contact
          </h1>
          <h5>
            Github
          </h5>
          <h5>
            LinkedIn
          </h5>
          <h5>
            Instagram
          </h5>
          <h5>
            Email
          </h5>
          <h5>
            Turing Alumni Page
          </h5>
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
