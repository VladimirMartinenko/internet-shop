import React from 'react'
import classes from './About.module.scss'

const About = () => {
  return (
    <section className={classes.main}>
      <h1 className={classes.textH1}>Небагато про нас</h1>
      <figure className={classes.position}>
        <img
          className={classes.img}
          src='/staticImages/коллектив-врачей-и-медсестер-создал-плоский-стиль-символов-193849561.webp'
          alt='foto'
        ></img>
        <article className={classes.text}>
          Всі товари, представлені на сайті Ви можете побачити в магазинах. Для
          Вашої зручності ми працюємо без вихідних, тому Ви можете відвідати нас
          в найбільш зручне для Вас час, а салони-магазини розташовані в
          найбільш зручних для відвідування районах міста. У мережі магазинів
          працюють досвідчені фахівці, які завжди раді відповісти на всі Ваші
          запитання та надати кваліфіковану консультацію. Також до Ваших послуг
          - можливість прокату реабілітаційної техніки (милиці, палиці, ходунки,
          інвалідні візки та ін.), індивідуальне виготовлення ортопедичних
          устілок, безкоштовні консультації лікарів та профільних фахівців.
        </article>
      </figure>
    </section>
  )
}

export default About
