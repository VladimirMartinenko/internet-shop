import React from 'react';
import cx from "classnames";
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={cx(style.footer)}>
      <p className={cx(style.text)}>МЕДИМПЛАНТ - металоконструкции и медтовары</p>
      <p className={cx(style.text)}>Email:docbetin@gmail.com</p>
      <p className={cx(style.text)}>tel:+380679136173</p>
    </div>
  );
}

export default Footer;
