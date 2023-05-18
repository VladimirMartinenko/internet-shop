import React from 'react';
import cx from 'classnames';
import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss';

const Input = ({ name, type, ...restProps }) => {
  return (
    <Field name={name}>
    {({ field, form, meta }) => {
      const inputStyles = cx(styles.input, {
        [styles.validInput]: meta.touched && !meta.error,
        [styles.invalidInput]: meta.touched && meta.error,
      });
      return (
        <div className={styles.position}>
          <input
            {...field}
            type={type}
            className={inputStyles}
            {...restProps}
          />
          {/* { meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>} */}
          <ErrorMessage name={name} component="div" className={styles.error}/>
        </div>
      );
    }}
  </Field>
  );
}

export default Input;
