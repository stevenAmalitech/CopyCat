import React from "react";
import {styles} from "../styles.js";
import PropTypes from "prop-types";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;

    return (
      <div style={styles.divStyle}>
        <h1 style={{ marginBottom: 40 }}>
          Copy Cat {this.props.name ? this.props.name : "Tom"}
        </h1>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
        ></input>
        <img
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{this.props.copying && this.input.value} </p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  copying: PropTypes.string.isRequired,
  toggleTape: PropTypes.func.isRequired,
};
