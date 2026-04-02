import React from "react";
import styles from "./OpenHours.module.css";
import clinicImg from "../../assets/hero-3.jpg"; // your image

export default function OpenHours() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h3 className={styles.subTitle}>Open Hours</h3>
          <h2 className={styles.title}>Best Hair And Skin Zone</h2>

          <p className={styles.desc}>
            At Advanced GroHair & GloSkin, we specialize in advanced,
            science-backed solutions for your hair and skin. Our expert team is
            dedicated to helping you achieve your goals with cutting-edge
            technology and personalized care.
          </p>

          <div className={styles.hours}>
            <p><span>Mon – Fri :</span> 10:00 AM - 8:00 PM</p>
            <p><span>Saturday :</span> 10:00 AM - 8:00 PM</p>
            <p><span>Sunday :</span> 10:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* RIGHT BIG IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img src={clinicImg} alt="Clinic" className={styles.image} />
          </div>
        </div>

      </div>
    </section>
  );
}
