import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextSlideSucces } from '../../redux/actions/carouselActionCreators'
import classes from './Slider.module.scss'
import CONSTANTS from '../../constants'
import { Link, useHistory } from 'react-router-dom'

const Slider = () => {
  const history = useHistory()
  const { slider } = useSelector(state => state.slider)
  const { currentIndices } = useSelector(state => state.carousel)

  const dispatch = useDispatch()
  const nextSlide = () => {
    dispatch(nextSlideSucces(slider.length))
  }
  useEffect(() => {
    const id = setTimeout(() => nextSlide(), 2000)
    return () => clearTimeout(id)
  }, [currentIndices])

  return (
    <>
      <section className={classes.slideShowMain}>
        {slider &&
          slider.map((image, index) => {
            let isCurrentImage =
              index >= currentIndices[0] && index <= currentIndices[1]
            return (
              <Link key={index} className={classes.slideShowLink}>
                {isCurrentImage && (
                  <>
                    <img
                      className={classes.image}
                      src={
                        image.Product.img === undefined
                          ? CONSTANTS.PRODUCT_IMAGE_PATH
                          : CONSTANTS.HTTP_SERVER_URL_images + image.Product.img
                      }
                      alt={image.Product.name}
                      onClick={() =>
                        history.push('/product/' + image.Product.id)
                      }
                    />
                    <p className={classes.slideShowName}>
                      {image.Product.name}
                    </p>
                  </>
                )}
              </Link>
            )
          })}
      </section>
    </>
  )
}

export default Slider
