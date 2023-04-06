import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Button
          text="Signup"
          width={100}
          height={40}
          fontSize={16}
          bgColor="greenyellow"
          color="#000"
          href="/signup"
        />
        <Button
          text="Login"
          width={100}
          height={40}
          fontSize={16}
          bgColor="cyan"
          color="#000"
          href="/login"
        />
      </div>
      <nav className={styles.right}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Constact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
