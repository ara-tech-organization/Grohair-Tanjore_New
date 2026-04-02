import React from "react";
import styles from "./BeforeAfter.module.css";
import trans1 from "../../assets/trans1.jpg";
import trans2 from "../../assets/trans2.jpg";
import trans3 from "../../assets/trans3.jpg";
import trans4 from "../../assets/trans4.jpg";
import trans5 from "../../assets/trans5.jpg";

const steps = [
  { img: trans1 },
  { img: trans2 },
  { img: trans3 },
  { img: trans4 },
  { img: trans5 },
];

export default function BeforeAfter() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>Journey & Results</span>
        <h2 className={styles.title}>
          Before ➜ After <span className={styles.gradient}>Evolution</span>
        </h2>
        <p className={styles.subtext}>
          A clear progression — see how each stage evolves into the final polished output.
        </p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <div className={styles.card} key={i}>
            <img src={step.img} className={styles.image} alt={step.label} />
            <p className={styles.label}>{step.label}</p>
            {/* {i !== steps.length - 1 && <div className={styles.line}></div>} */}
          </div>
        ))}
      </div>
    </section>
  );
}
