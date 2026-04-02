import React from "react";
import styles from "./SecondaryHeader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SecondaryHeader = () => {
  return (
    <div className={styles.secondaryHeader}>
      <div className={styles.inner}>

        {/* LEFT SIDE: Phone + Email */}
        <div className={styles.left}>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+918098756789"> (+91) 80987 56789</a>
          </div>

          <div className={styles.item}>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:grohairgloskintnj@gmail.com">
               grohairgloskintnj@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: SOCIAL ICONS */}
        <div className={styles.right}>
          <a
            href="https://www.facebook.com/adgrohairgloskinthanjavur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
          </a>

          <a
            href="https://www.instagram.com/adgrohairgloskinthanjavur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
          </a>

          <a
            href="https://www.youtube.com/@AdGrohairGloskinThanjavur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default SecondaryHeader;
