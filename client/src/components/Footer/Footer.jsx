import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p className={style.text}>МЕДІМПЛАНТ - металоконструкції та медтовари</p>
      <p className={style.text}>Email:docbetin@gmail.com</p>
      <p className={style.text}>tel:+380679136173</p>
    </div>
  )
}

export default Footer
