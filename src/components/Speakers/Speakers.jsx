import React from "react";
import styles from "./Speakers.module.css";

function Speakers() {
  return (
    <section className={styles.container}>
      <div className={styles.speakersContainer}>
        <h1> The Speakers </h1>
      </div>
      <div className={styles.allSpeakers}>
      </div>
      <a href=""> View All Speakers </a>
    </section>
  );
}

export default Speakers;
