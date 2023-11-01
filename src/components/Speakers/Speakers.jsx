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
      <div className={styles.yearsOfRails}>
        <div className={styles.years20}>
          <h2> 20 Years of Rails </h2>
        </div>
        <div className={styles.description}>
          <p> We celebrated an incredible milestone together - Rails turned 20! With<br />
             an amazing first 20 years under our belt, we now look forward to what <br />
             the next 20 will bring.<br />
             (Yes, there was cake.) </p>
             <button> Click here. </button>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
