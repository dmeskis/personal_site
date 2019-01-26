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
          <p>
            Lorem ipsum dolores wallaby great gatsby flying monkey hidden dragon.
          </p>
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
