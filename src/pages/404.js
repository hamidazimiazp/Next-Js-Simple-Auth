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

const NotFound = () => {
  return (
    <div style={styles}>
      <h1>404 -_-</h1>
      <br />
      <p style={{ fontSize: 18, color: "red" }}> Not Found!</p>
      <br />
      <br />
      <br />
      <Button text="Back To Home" width={150} href="/" />
    </div>
  );
};

export default NotFound;
