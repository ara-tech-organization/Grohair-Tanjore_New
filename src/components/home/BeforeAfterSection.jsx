import React, { useEffect, useRef, useState } from "react";
import styles from "./BeforeAfterSection.module.css";

import collage1 from "../../assets/BeforeAfter/b-a-01.webp";
import collage2 from "../../assets/BeforeAfter/b-a-02.webp";
import collage3 from "../../assets/BeforeAfter/b-a-03.webp";
import collage4 from "../../assets/BeforeAfter/b-a-04.webp";
import collage5 from "../../assets/BeforeAfter/b-a-05.webp";

const images = [collage1, collage2, collage3, collage4, collage5];

export default function BeforeAfterSection() {
  const sliderRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });

        // Reset to start when reaching end
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [autoScroll]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    setAutoScroll(false);
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    setAutoScroll(false);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Before & After Transformations</h2>
      <p className={styles.subtitle}>
        Real client results from GroHair & GloSkin Thanjavur.
      </p>

      <div className={styles.sliderWrapper}>
        <button className={styles.navBtn} onClick={scrollLeft}>❮</button>

        <div className={styles.slider} ref={sliderRef}>
          {images.map((img, index) => (
            <div className={styles.card} key={index}>
              <img src={img} alt={`Before After ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className={styles.navBtn} onClick={scrollRight}>❯</button>
      </div>
    </section>
  );
}