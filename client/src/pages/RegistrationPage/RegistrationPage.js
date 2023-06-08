import React from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import classes from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <div className={classes.containerMain}>
      <h1 className={classes.text}>РЕГІСТРАЦІЯ</h1>
      {error &&
        error.map((error) => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
