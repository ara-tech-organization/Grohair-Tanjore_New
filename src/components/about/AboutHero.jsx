import React from "react";
import styles from "./AboutHero.module.css";
import aboutImg from "../../assets/about.webp"

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Left content */}
        <div className={styles.textBox}>
          <span className={styles.badge}>About Us</span>

          <h1 className={styles.title}>
          Your Best Center <span className={styles.gradient}>Hair & Skin Care</span> Center.
          </h1>

          <p className={styles.subtitle}>
           Our team of certified professionals specializes in providing personalized solutions tailored to your unique concerns.

Whether you’re struggling with hair loss, scalp issues, acne, pigmentation, or signs of aging, our advanced treatments deliver visible and long-lasting results.
          </p>

          {/* <button className={styles.cta}>Learn More</button> */}
        </div>

        {/* Right Illustration */}
        <div className={styles.imageBox}>
          <img
            src={aboutImg}
            alt="About illustration"
            className={styles.heroImg}
          />
        </div>
      </div>

      {/* Floating shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
    </section>
  );
}
