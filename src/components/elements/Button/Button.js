import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  text,
  clicked,
  color,
  bgColor,
  href,
  width,
  height,
  fontSize,
}) => {
  if (href) {
    return (
      <Link
        className={styles.btn}
        href={href}
        style={{
          color: color,
          backgroundColor: bgColor,
          width,
          height,
          fontSize,
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
          width,
          height,
          fontSize,
        }}
      >
        {text}
      </button>
    );
  }
};

export default Button;
