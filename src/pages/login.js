import React, { useState } from "react";
import styles from "@/styles/auth.module.css";
import Input from "@/components/elements/FormInput/Input";
import Button from "@/components/elements/Button/Button";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === "success") {
      router.push("/dashboard");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Login Form</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          name="email"
          label="Email"
          type="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          onChange={changeHandler}
          value={formData.password}
        />
        <div className={styles.buttonSection}>
          <Button color="#fff" width={150} text="Login" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
