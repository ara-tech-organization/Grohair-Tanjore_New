import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false); // close menu after clicking a link
  };

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        {/* Top row: logo + hamburger (on mobile) */}
        <div className={styles.topRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <NavLink to="/" onClick={handleNavClick}>
              <img
                src={logo}
                alt="Logo"
                className={styles.logoImg}
                style={{ cursor: "pointer" }}
              />
            </NavLink>
          </div>

          {/* Hamburger (visible only on mobile via CSS) */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Nav */}
        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
            onClick={handleNavClick}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
            onClick={handleNavClick}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
            onClick={handleNavClick}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeNavItem : styles.navItem
            }
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <button
          className={`${styles.cta} ${isMenuOpen ? styles.ctaOpen : ""}`}
          onClick={handleNavClick}
        >
          <NavLink to="/contact" className={styles.navSpl}>
            <span>Get in Touch</span>
          </NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
