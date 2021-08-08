import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <a href={this.props.url} className={styles.myButton}>
        {this.props.text}
      </a>
    );
  }
}

export default Button;
