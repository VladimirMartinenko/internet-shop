import React from 'react'
import classes from './About.module.scss'

const About = () => {
  return (
    <section className={classes.main}>
      <h1 className={classes.textH1}>A little about us</h1>
      <figure className={classes.position}>
        <img
          className={classes.img}
          src='/staticImages/slide-new-collection.jpg'
          alt='VELORA store'
        ></img>
        <article className={classes.text}>
          VELORA is a clothing and footwear store for everyday looks and
          seasonal collections. Everything you see on the website is also
          available in our shops. We are open every day, so you can drop by
          whenever it suits you. Our showrooms are easy to reach, and the team
          is happy to help you choose sizes, styles, and complete outfits —
          from casual wear and sneakers to jackets, bags, and boots.
        </article>
      </figure>
    </section>
  )
}

export default About
