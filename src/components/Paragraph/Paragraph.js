import React, { Component } from "react";
import styles from "./Paragraph.module.css";

export class Paragraph extends Component {
  render() {
    return <p className={styles.p}>{this.props.children}</p>;
  }
}

export default Paragraph;
