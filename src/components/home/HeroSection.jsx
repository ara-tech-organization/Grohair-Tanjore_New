import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero5 from "../../assets/hero-5.jpg";

const slides = [
  {
    id: 1,
    img: hero1,
    title: "Advanced Skin Brightening & Glow Treatments",
    subtitle: "Personalized care for strong, healthy, confident hair.",
    brand: "GroHair & GloSkin Thanjavur",
  },
  {
    id: 3,
    img: hero3,
    title: "Experience GroHair Excellence",
    subtitle: "Premium technology & visible results.",
    brand: "GroHair & GloSkin Thanjavur",
  },
  {
    id: 2,
    img: hero2,
    title: "Anti-Aging & Skin Rejuvenation",
    subtitle: "Achieve clean, smooth, radiant skin with medical-grade care.",
    brand: "GroHair & GloSkin Thanjavur",
  },
   {
    id: 4,
    img: hero5,
    title: "Eyebrow Transplant Perfection",
    subtitle: "Achieve fuller, natural-looking brows with precise follicle restoration.",
    brand: "GroHair & GloSkin Thanjavur",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // 🔁 Stable auto-advance with setTimeout chained on `current`
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearTimeout(timer);
  }, [current, total]);

  // optional: manually go to a slide from dots
  const goTo = (index) => setCurrent(index);

  const activeSlide = slides[current];

  return (
    <div className={styles.heroContainer}>
      {/* BACKGROUND SLIDES */}
      <div className={styles.sliderWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === current ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}
      </div>

      {/* LEFT TEXT CONTENT */}
      <div className={styles.leftContent}>
        <div className={styles.tag}>{activeSlide.brand}</div>

        <h1 className={styles.title}>{activeSlide.title}</h1>

        <p className={styles.subtitle}>{activeSlide.subtitle}</p>

        <button className={styles.ctaBtn}>Book Appointment</button>
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === current ? styles.activeDot : ""
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Small debug badge – you can remove later */}
      {/* <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 20,
          padding: "4px 8px",
          borderRadius: 999,
          fontSize: 12,
          background: "rgba(0,0,0,0.45)",
          color: "#fff",
        }}
      >
        Slide {current + 1} / {total}
      </div> */}
    </div>
  );
}
