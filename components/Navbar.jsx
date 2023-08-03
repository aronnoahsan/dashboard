"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  function closeMenu() {
    setNavbarOpen(false);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.nav__logo}>
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="SmartLink Logo"
              width={72}
              height={16}
            />
          </span>
        </Link>
        <ul
          className={
            navbarOpen
              ? `${styles.nav__menu} ${styles.active}`
              : styles.nav__menu
          }
        >
          <li className={styles.nav__item}>
            <Link
              onClick={closeMenu}
              href="/terms-condition"
              className={styles.nav__link}
            >
              Terms & Condition
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              onClick={closeMenu}
              href="/about-us"
              className={styles.nav__link}
            >
              About
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              onClick={closeMenu}
              href="/contact-us"
              className={styles.nav__link}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          aria-label="Navigation Menu"
          onClick={handleToggle}
          className={
            navbarOpen
              ? `${styles.nav__button} ${styles.hamburger} ${styles.active}`
              : `${styles.nav__button} ${styles.hamburger}`
          }
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
