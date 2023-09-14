import React from "react";
import classes from "./LoginPage.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoginPage = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <main className={classes.containerMain}>
      <h1 className={classes.text}>ВХІД</h1>
      {error &&
        error.map((error) => <p className={classes.error}>{error.message}</p>)}
      <LoginForm />
      <Link className={classes.link} to="/registration">
        Зареєструватися
      </Link>
    </main>
  );
};

export default LoginPage;
