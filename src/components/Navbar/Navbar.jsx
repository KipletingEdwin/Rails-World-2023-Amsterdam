import React from "react";
import styles from "./Navbar.module.css";
import railsImage from "../../assets/rails-world-logo.png";

function Navbar() {
  return (
    <section className={styles.container}>
      <div className={styles.introduction}>
        <p>
          Rails World 2024 will take place in Toronto. Stay tuned for more
          details!
        </p>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.navbarLinks}>
          <img src={railsImage} alt="raisl-world-2023-image" />
        </div>
        <div className={styles.myLinks}>
            <ul>
                <li>
                    <a href="/speakers">Speakers</a>
                </li>
                <li>
                    <a href="/agenda">Agenda</a>
                </li>
                <li>
                    <a href="/faqs">FAQs</a>
                </li>
                <li><button>View all videos</button></li>
            </ul>
         
        </div>
      </div>
    </section>
  );
}

export default Navbar;
