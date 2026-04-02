// TestimonialsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './TestimonialsSection.module.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Replace these with your actual assets
import hero from '../../assets/hero-1.jpg';
import avatar1 from '../../assets/hero-2.jpg';
import avatar2 from '../../assets/hero-3.jpg';
import avatar3 from '../../assets/hero-4.jpg';
import avatar4 from '../../assets/about.jpg';

const DATA = [
  {
    id: 1,
    type: "Hair Treatment",
    text:
      "It's been a very fantastic and nice experience with advanced gro hair and glo skin Thanjavur team, I got the best result after my GFC treatment. The way they handle the customer is really nice, polite, and sweet. Thank you",
    name: "RAMANATHAN – Hair Treatment",
    img: avatar1,
  },
  {
    id: 2,
    type: "Hair Treatment",
    text:
      "I visited Advanced Glosin and Gor Hair Clinic for Hair treatment GFC. The ambience is excellent, creating a comfortable and relaxing environment. The doctors are very friendly and professional. Excellent experience",
    name: "PARAVEEN C – Hair Treatment",
    img: avatar2,
  },
  {
    id: 3,
    type: "Skin Treatment",
    text:
      "Best place for whole body care internally and extremely... such a natural result in just two sessions... budget-friendly with high-end products and technicians... one stop for consultation and good procedures for skin, body, and hair growth...",
    name: "MONICA MARAN  – Skin Treatment",
    img: avatar3,
  },
  {
    id: 4,
    type: "Skin & Hair Treatment",
    text:
      "GroHair & GloSkin Thanjavur provide excellent care and support through out my treatment.",
    name: "RAGHU – Skin & Hair Treatment",
    img: avatar4,
  },
  {
    id: 5,
    type: "Skin Treatment",
    text:
      "The skin treatments here are top-notch. After a few sessions, I noticed a significant improvement in my skin texture and tone. The team is professional and attentive to individual needs",
    name: "HARISH  – Skin Treatment",
    img: avatar3,
  },
];

export default function TestimonialsModernSingleImage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const autoRef = useRef(null);

  // autoplay logic: start when not paused
  useEffect(() => {
    if (!paused) {
      autoRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % DATA.length);
      }, 4500);
    }
    return () => {
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = null;
      }
    };
  }, [paused]);

  // navigation
  function prev() {
    setIndex((i) => (i - 1 + DATA.length) % DATA.length);
  }
  function next() {
    setIndex((i) => (i + 1) % DATA.length);
  }

  // swipe handlers for mobile
  function onTouchStart(e) {
    startX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (!startX.current) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    startX.current = null;
  }

  // keyboard nav
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.section} id='testimonials'>
      <h2 className={styles.heading}>What Our Customers Say!</h2>
      <div className={styles.inner}>
        {/* LEFT: single hero image (reduced height) */}
        
        <div className={styles.left}>
          <div className={styles.heroWrap}>
            <img src={hero} alt="Client hero" className={styles.hero} />
            <div className={styles.leftOverlay}>
              <div className={styles.brand}>GroHair & GloSkin</div>
              <h3 className={styles.title}>Real Stories, Real Results</h3>
              <p className={styles.lead}>Short testimonials from verified clients.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: innovative stacked carousel */}
        <div
          className={styles.right}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={styles.carousel}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button className={styles.nav} onClick={prev} aria-label="Previous">
              <FaChevronLeft />
            </button>

            <div className={styles.viewport}>
              {DATA.map((item, idx) => {
                // offset: 0 = active, 1 = next, last = prev, others = back
                const offset = (idx - index + DATA.length) % DATA.length;
                const pos =
                  offset === 0
                    ? styles.center
                    : offset === 1
                    ? styles.next
                    : offset === DATA.length - 1
                    ? styles.prev
                    : styles.back;
                return (
                  <article
                    key={item.id}
                    className={`${styles.slide} ${pos}`}
                    aria-hidden={offset !== 0}
                  >
                    <div className={styles.cardHead}>
                      <FaQuoteLeft className={styles.quote} />
                      <span className={styles.type}>{item.type}</span>
                    </div>

                    <p className={styles.text}>{item.text}</p>

                    <div className={styles.person}>
                      <img src={item.img} alt={item.name} />
                      <div>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.role}>Verified client</div>
                      </div>
                    </div>

                    <div
                      className={styles.progress}
                      style={{ width: offset === 0 ? "100%" : "0%" }}
                      aria-hidden
                    />
                  </article>
                );
              })}
            </div>

            <button className={styles.nav} onClick={next} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.footer}>
            <div className={styles.dots}>
              {DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`${styles.dot} ${idx === index ? styles.dotActive : ""}`}
                  aria-label={`Go to ${idx + 1}`}
                />
              ))}
            </div>

            <div className={styles.ctaRow}>
              {/* <button className={styles.primary}>See more testimonials</button>
              <button className={styles.secondary} onClick={() => setIndex(0)}>
                Reset
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}