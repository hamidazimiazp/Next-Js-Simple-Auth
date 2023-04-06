import Button from "@/components/elements/Button/Button";
import React from "react";

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
  return (
    <div style={styles}>
      <h1>Nextjs Simple JWT</h1>
      <p style={{ fontSize: 18 }}> Authentication & Authorization</p>
      <br />
      <br />
      <br />
      <Button text="Login" width={100} href="/login" />
    </div>
  );
};

export default HomePage;
