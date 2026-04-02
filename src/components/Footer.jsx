import React from "react";
import styles from "./Footer.module.css";
import Footerlogo from "../assets/G-logo.webp"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo + small text */}
        <div className={styles.brandCol}>
          <img
            src={Footerlogo}
            alt="GroHair Logo"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Advanced hair & skin treatments with personalised care.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.heading}>Useful Links</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#BookAppointment">Book Appointment</a>
            </li>
            <li>
              <a href="#Skin-treatments">Skin Treatments</a>
            </li>
            <li>
              <a href="#Hair-treatments">Hair Treatments</a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className={styles.mapCol}>
          <h4 className={styles.heading}>Find Us</h4>
          <div className={styles.mapWrap}>
            {/* Replace src with your real Google Maps embed */}
            <iframe
              title="GroHair Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3546.939232706588!2d79.136112!3d10.773315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab962ed07ae27%3A0x301c1c67f63e3b6c!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Thanjavur!5e1!3m2!1sen!2sin!4v1764052023250!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} GroHair Clinic. All rights reserved.</p>

        <p className={styles.credit}>
          Crafted with Excellence by{" "}
          <a
            href="https://discovertechnologies.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ara Discoveries Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
