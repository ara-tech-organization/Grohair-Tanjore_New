import React, { useEffect, useState } from "react";
import styles from "./AboutSection.module.css";
import aboutImg from "../../assets/about1.jpg";

export default function AboutSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 1000;

    const timer = setInterval(() => {
      start += 30;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.aboutSection}>
      {/* Diagonal background stripe stays active — NOT changing */}

      <div className={styles.left}>
        <div className={styles.card1}>
          <h3>GroHair & GloSkin Thanjavur</h3>
          <p>
            Whether you’re struggling with hair loss, scalp issues, acne, pigmentation, or signs of aging, our advanced treatments deliver visible and long-lasting results.
          </p>
        </div>

        <div className={styles.card2}>
          <h2>
           Our team of certified professionals specializes in providing personalized solutions tailored to your unique concerns.
          </h2>
        </div>

        <div className={styles.statBar}>
          <div>
            <h3>{count}+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3>10+</h3>
            <p>Treatments</p>
          </div>
          <div>
            <h3>2+</h3>
            <p>Years Expertise</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageFrame}></div>

        <img
          src={aboutImg}
          alt="GroHair About"
          className={styles.mainImage}
        />

        <div className={styles.badge}>
          <h4>Premium Care</h4>
        </div>
      </div>
    </section>
  );
}
