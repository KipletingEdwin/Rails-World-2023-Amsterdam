// import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className={styles.container}>
      <p>
        This website was created by{" "}
        <a href="https://www.linkedin.com/in/shona-chan/">Shona Chan</a> , a
        junior developer from the Rails community.
        <br />
        It was commissioned by the Rails Foundation, designed by
        <a href="https://katya-sitko.netlify.app/">Katya Sitko</a>
        and created under the mentorship of
        <a href="https://radioactivetoy.tech/">Ayush Newatia.</a>
      </p>
      <a href="https://twitter.com/rails">
        <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons}  />
      </a>
      <a href="https://www.linkedin.com/company/ruby-on-rails-org/">
        <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
      </a>
      <ul>
        <li>
          <a href="https://rubyonrails.org/world/conduct">Code of Conduct</a>
          <a href="https://rubyonrails.org/foundation/privacy">
            Privacy Policy
          </a>
          <a href="https://rubyonrails.org/world/terms">Terms & Conditions</a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
