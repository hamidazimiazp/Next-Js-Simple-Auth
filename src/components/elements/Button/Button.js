import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, clicked, color, bgColor, href }) => {
  if (href) {
    return (
      <Link
        className={styles.btn}
        href={href}
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className={styles.btn}
        onClick={clicked}
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
      >
        {text}
      </button>
    );
  }
};

export default Button;
