import React from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import classes from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <main className={classes.containerMain}>
      <h1 className={classes.text}>РЕЄСТРАЦІЯ</h1>
      {error &&
        error.map((error) => (
          error.errors.map((errors)=>
          <p className={classes.error}>{errors.message}</p>
        )))}
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
