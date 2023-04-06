import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Button from "../Button/Button";
import { loggedIn } from "@/utils/auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    loggedIn().then((data) => {
      if (data) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {isLoggedIn ? (
          <>
            <Button
              text="Logout"
              width={100}
              height={40}
              fontSize={16}
              color="red"
              href="/logout"
            />
            <Button
              text="Dashboard"
              width={100}
              height={40}
              fontSize={16}
              href="/dashboard"
            />
          </>
        ) : (
          <>
            <Button
              text="Signup"
              width={100}
              height={40}
              fontSize={16}
              href="/signup"
            />
            <Button
              text="Login"
              width={100}
              height={40}
              fontSize={16}
              href="/login"
            />
          </>
        )}
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
