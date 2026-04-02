import React, { useState } from 'react';
import styles from './YouTubeTestimonial.module.css';

import hero1 from '../../assets/Skin Treatments/Microblading.jpg';
import hero2 from '../../assets/Skin Treatments/Botox.jpg';
import hero3 from '../../assets/Hair Treatments/mesotheraphy1.jpg';
import hero4 from '../../assets/Skin Treatments/Skin brightening.jpg';
import client1 from '../../assets/about.jpg';
import client2 from '../../assets/about1.jpg';

const VIDEOS = [
    { id: 'h7SmV_W9Npo', title: 'Hair Transformation — GroHair', caption: '0:45' },
    { id: 'xzc5YF9LGqU', title: 'Skin Glow Story — GloSkin', caption: '0:38' },
];

export default function TwoYouTubeTestimonialsCollage() {
  const [playing, setPlaying] = useState(-1);

  return (
    <section className={styles.wrapper} aria-label="Client testimonials">
        <h1 className={styles.testimonialheading}>Our Doctors Say</h1>
      <div className={styles.inner}>

        {/* LEFT — CLEAN 4-PHOTO COLLAGE */}
        <aside className={styles.left}>
          <div className={styles.grid4}>
            <img src={hero1} alt="collage 1" />
            <img src={hero2} alt="collage 2" />
            <img src={hero3} alt="collage 3" />
            <img src={hero4} alt="collage 4" />
          </div>

          <div className={styles.leftOverlay}> 
            <div className={styles.brand}>GroHair & GloSkin</div>
            <h2 className={styles.head}>Book your Appointments Now</h2>
            {/* <p className={styles.lead}>Real clients. Quick testimonials. See the transformations.</p> */}
          </div>
        </aside>

        {/* RIGHT — TESTIMONIAL VIDEOS */}
        <main className={styles.right}>
          <div className={styles.cards}>
            {VIDEOS.map((v, i) => (
              <article key={v.id} className={styles.card}>
                <div className={styles.mediaWrap}>
                  {playing === i ? (
                    <iframe
                      className={styles.video}
                      src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button className={styles.thumbBtn} onClick={() => setPlaying(i)} aria-label={`Play ${v.title}`}>
                      <img className={styles.thumb} src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
                      <div className={styles.playBadge} aria-hidden>
                        <svg viewBox="0 0 24 24" className={styles.playSvg}><circle cx="12" cy="12" r="11" /><path d="M10 8l6 4-6 4V8z" fill="#fff"/></svg>
                      </div>
                    </button>
                  )}
                </div>

                <div className={styles.cardMeta}>
                  <div>
                    <h4 className={styles.vTitle}>{v.title}</h4>
                    <p className={styles.vTime}>{v.caption}</p>
                  </div>

                  <div className={styles.userThumbs}>
                    <img src={i === 0 ? client1 : client2} alt="client" className={styles.clientThumb} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.ctaRow}>
            {/* <button className={styles.primary}>See more testimonials</button> */}
            <button className={styles.ghost} onClick={() => setPlaying(-1)}>Close all</button>
          </div>
        </main>
      </div>
    </section>
  );
}


