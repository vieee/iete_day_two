import React, { Component } from "react";
import styles from "./VideoElement.module.css";

class VideoElement extends Component {
  render() {
    return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BvQA4fOy3lk"
        title="YouTube video player"
        frameborder="0"
        className={styles.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
}

export default VideoElement;
