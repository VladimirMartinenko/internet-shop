import React from "react";
import cx from "classnames";
import classes from "./LoginPage.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <div className={classes.containerMain}>
      <h1 className={classes.text}>ВХІД</h1>
      {error &&
        error.map((error) => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
