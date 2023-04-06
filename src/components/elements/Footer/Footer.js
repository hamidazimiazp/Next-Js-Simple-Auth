import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <p className={styles.paraph}>
      copyright 2023&copy;
      <Link target="_blank" href="https://github.com/hamidazimiazp">
        Github
      </Link>
    </p>
  );
};

export default Footer;
