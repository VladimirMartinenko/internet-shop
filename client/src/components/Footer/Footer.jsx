import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p className={style.text}>МЕДИМПЛАНТ - металоконструкции и медтовары</p>
      <p className={style.text}>Email:docbetin@gmail.com</p>
      <p className={style.text}>tel:+380679136173</p>
    </div>
  )
}

export default Footer
