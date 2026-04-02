import React, { useEffect, useState, useRef } from "react";
import styles from "./HairTreatments.module.css";
import { useNavigate } from "react-router-dom";
import eyebrowTransplant from "/src/assets/Hair Treatments/eyebrow-transplant.webp";
import stemXPro from "/src/assets/Hair Treatments/stem-x-pro.webp";
import mesotherapy from "/src/assets/Hair Treatments/mesotheraphy.jpg";
import oxygenLaser from "/src/assets/Hair Treatments/oxgen-laser-therapy.webp";
import scalpMicro from "/src/assets/Hair Treatments/ScalpMicropigmentation.jpg";

const treatments = [
    {
        id: 1,
        img: eyebrowTransplant,
        title: "Eyebrow Transplant",
        description:
            "Eye transplant treatment, commonly referred to as a corneal transplant or keratoplasty, is a surgical procedure that replaces a damaged or diseased cornea with a healthy donor cornea to restore vision.",
    },
    {
        id: 2,
        img: stemXPro,
        title: "Stem X Pro",
        description:
            "The STEM-X Pro is a cutting-edge learning platform designed to ignite curiosity and innovation in students through hands-on STEM education.",
    },
    {
        id: 3,
        img: mesotherapy,
        title: "Mesotherapy",
        description:
            "Mesotherapy is a non-surgical cosmetic treatment that involves injecting a customized blend of vitamins, enzymes, hormones, and plant extracts into the skin to rejuvenate and tighten it while also reducing fat.",
    },
    {
        id: 4,
        img: oxygenLaser,
        title: "Oxygen Laser Therapy",
        description:
            "Oxygen laser therapy for hair is an advanced treatment that combines low-level laser therapy (LLLT) with oxygen infusion to stimulate hair growth and improve scalp health.",
    },
    {
        id: 5,
        img: scalpMicro,
        title: "Scalp Micropigmentation",
        description:
            "Scalp Micropigmentation (SMP) is a non-surgical hair loss solution that uses micro-needles to deposit pigment into the scalp, creating the appearance of a closely shaved head or denser hair.",
    },
];


export default function HairTreatments() {
    const [index, setIndex] = useState(0);
    const autoplayRef = useRef(null);
     const navigate = useNavigate();

    const prev = () =>
        setIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
    const next = () => setIndex((prev) => (prev + 1) % treatments.length);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % treatments.length);
        }, 5000);
        return () => clearInterval(autoplayRef.current);
    }, []);

    const pauseAutoplay = () => clearInterval(autoplayRef.current);
    const resumeAutoplay = () => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % treatments.length);
        }, 5000);
    };

    return (
        <section className={styles.wrapper} aria-label="Hair treatments" id="Hair-treatments">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <h2 className={styles.heading}>
                        Our <span>Hair Treatments</span>
                    </h2>
                    <p className={styles.lead}>
                        Professional treatments tailored to restore, strengthen and refresh
                        your hair and scalp.
                    </p>
                </header>

                <div
                    className={styles.panel}
                    onMouseEnter={pauseAutoplay}
                    onMouseLeave={resumeAutoplay}
                >
                    {/* LEFT: featured / big */}
                    <div className={styles.feature}>
                        <button
                            className={styles.arrow}
                            aria-label="Previous treatment"
                            onClick={prev}
                        >
                            ‹
                        </button>

                        <article
                            className={styles.card}
                            key={treatments[index].id}
                            aria-roledescription="slide"
                            aria-label={`${treatments[index].title}`}
                        >
                            <div
                                className={styles.media}
                                style={{ backgroundImage: `url(${treatments[index].img})` }}
                                role="img"
                                aria-label={treatments[index].title}
                            />

                            <div className={styles.cardBody}>
                                {/* === NEW: small circular badge image above title === */}
                                <img
                                    src={treatments[index].img}
                                    alt={treatments[index].title}
                                    className={styles.cardIcon}
                                />

                                <h3 className={styles.cardTitle}>
                                    {treatments[index].title}
                                </h3>
                                <p className={styles.cardText}>
                                    {treatments[index].description}
                                </p>
                                <div className={styles.ctaRow}>
                                    <button className={styles.ctaPrimary}>Learn more</button>
                                    <button
                                        className={styles.ctaGhost}
                                        onClick={() => navigate("/contact")}
                                    >
                                        Book consult
                                    </button>
                                </div>
                            </div>
                        </article>

                        <button
                            className={`${styles.arrow} ${styles.right}`}
                            aria-label="Next treatment"
                            onClick={next}
                        >
                            ›
                        </button>
                    </div>

                    {/* RIGHT: thumbnails */}
                    <aside className={styles.list} aria-hidden={false}>
                        {treatments.map((t, i) => {
                            const active = i === index;
                            return (
                                <button
                                    key={t.id}
                                    className={`${styles.thumb} ${active ? styles.activeThumb : ""}`}
                                    onClick={() => setIndex(i)}
                                    aria-pressed={active}
                                    aria-label={`Show ${t.title}`}
                                >
                                    <span
                                        className={styles.thumbImg}
                                        style={{ backgroundImage: `url(${t.img})` }}
                                        aria-hidden="true"
                                    />
                                    <span className={styles.thumbMeta}>
                                        <strong className={styles.thumbTitle}>{t.title}</strong>
                                        {/* <small className={styles.thumbDesc}>
                                            {t.description}
                                        </small> */}
                                    </span>
                                </button>
                            );
                        })}
                    </aside>
                </div>

                {/* Mobile thumbnail scroller indicator */}
                <div className={styles.mobileThumbs} aria-hidden="true">
                    {treatments.map((t, i) => (
                        <button
                            key={t.id}
                            className={`${styles.mobileDot} ${i === index ? styles.mobileDotActive : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to ${t.title}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
