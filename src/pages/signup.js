import React, { useState } from "react";
import styles from "@/styles/auth.module.css";
import Input from "@/components/elements/FormInput/Input";
import Button from "@/components/elements/Button/Button";
import { useRouter } from "next/router";
import { verifyToken } from "@/utils/auth";

const SignUp = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === "success") {
      router.push("/login");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Signup Form</h1>
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
        <Input
          name="confirmPassword"
          label="confirm Password"
          type="password"
          onChange={changeHandler}
          value={formData.confirmPassword}
        />
        <div className={styles.buttonSection}>
          <Button color="#fff" width={150} text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  const secretKey = process.env.SECRET_KEY;
  const result = verifyToken(token, secretKey);

  if (result) {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
}
