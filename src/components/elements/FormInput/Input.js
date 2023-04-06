import React from "react";
import styles from "./Input.module.css";

const Input = ({ name, label, type, value, onChange }) => {
  return (
    <div className={styles.formInput}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoComplete="false"
      />
    </div>
  );
};

export default Input;
