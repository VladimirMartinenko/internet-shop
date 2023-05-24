import React from 'react';
import cx from 'classnames';
import { ErrorMessage, Field } from 'formik';
import styles from './MySelect.module.scss';

const MySelect = ({ name, type, ...restProps }) => {
  return (
    <Field name={name}>
    {({ field, form, meta }) => {
      const inputStyles = cx(styles.input, {
        [styles.validInput]: meta.touched && !meta.error,
        [styles.invalidInput]: meta.touched && meta.error,
      });
      return (
        <div className={styles.position}>
          <select
            {...field}
            type={type}
            className={inputStyles}
            {...restProps}
          />
          {/* { meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>} */}
          {/* <ErrorMessage name={name} component="div" className={styles.error}/> */}
        </div>
      );
    }}
  </Field>
  );
}

export default MySelect;