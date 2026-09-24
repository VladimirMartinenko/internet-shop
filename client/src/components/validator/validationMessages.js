import React from 'react';
import classes from './validationMessages.module.scss'
import cx from 'classnames'

const ValidationMessages = ({Error,message}) => {
  const inputStyles = cx(classes.input, {
    [classes.valid]: message === 'Success',
    [classes.error]: message === 'Error'
  })
  return (
    <div>
      {message && <div className={inputStyles}>{message}</div>}
    </div>
  );
}

export default ValidationMessages;
