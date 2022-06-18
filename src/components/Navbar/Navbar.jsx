import React from "react";
import image from "./img/globe.png";
import styles from "./Navbar.module.css";
import { TITLE } from "./constants";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.navImage} src={image} />
      <div className={styles.navTitle}>{TITLE}</div>
    </nav>
  );
}
