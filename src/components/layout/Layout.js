import React from "react";
import styles from "./Layout.module.css";
import Footer from "../elements/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}></section>
      <section className={styles.main}>{children}</section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
