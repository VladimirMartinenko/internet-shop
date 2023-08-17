import React from 'react';
import classes from './validationMessages.module.scss'
import cx from 'classnames'

const ValidationMessages = ({Error,message}) => {
  const inputStyles = cx(classes.input, {
    [classes.valid]: message === 'Успішно',
    [classes.error]: message === 'Помилка'
  })
  return (
    <div>
      {message && <div className={inputStyles}>{message}</div>}
    </div>
  );
}

export default ValidationMessages;
