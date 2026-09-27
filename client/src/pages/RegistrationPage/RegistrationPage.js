import React from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import classes from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <main className={classes.containerMain}>
      <h1 className={classes.text}>REGISTRATION</h1>
      {Array.isArray(error) &&
        error.map((item, index) => (
          <p key={index} className={classes.error}>
            {item.message || item.msg || "Registration failed"}
          </p>
        ))}
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
