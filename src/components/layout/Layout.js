import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}></section>
      <section className={styles.main}>{children}</section>
      <section className={styles.footer}></section>
    </div>
  );
};

export default Layout;
