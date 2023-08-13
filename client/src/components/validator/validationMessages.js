import React from 'react';
import classes from './validationMessages.module.scss'
import cx from 'classnames'

const ValidationMessages = ({Error,message}) => {
  // console.log(Error,Message);
  const inputStyles = cx(classes.input, {
    [classes.valid]: message === 'Успішно',
    [classes.error]: message === 'Помилка'
  })
  return (
    <div>
       {/* {Error && <div className={classes.error}>{Error}</div>} */}
      {/* {Error &&
        Error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))} */}
      {/* {Message && <div className={classes.valid}>{Message}</div>} */}
      {message && <div className={inputStyles}>{message}</div>}
    </div>
  );
}

export default ValidationMessages;
