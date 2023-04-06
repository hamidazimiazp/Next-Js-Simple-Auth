import Button from "@/components/elements/Button/Button";
import { loggedIn } from "@/utils/auth";
import React, { useEffect, useState } from "react";

const styles = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 10,
  color: "#1e1e1e",
  fontSize: 26,
  fontWeight: "normal",
};

const HomePage = () => {
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
    <div style={styles}>
      <h1>Nextjs Simple JWT</h1>
      <p style={{ fontSize: 18 }}> Authentication & Authorization</p>
      <br />
      <br />
      <br />
      {isLoggedIn ? (
        <Button text="Dashboard" width={100} href="/dashboard" />
      ) : (
        <Button text="Login" width={100} href="/login" />
      )}
    </div>
  );
};

export default HomePage;
