import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CONSTANTS from '../../constants'
import classes from './Product.module.scss'

function NextArrow ({ onClick }) {
  return <div className={classes.arrowNext} onClick={onClick} />
}

function PrevArrow ({ onClick }) {
  return <div className={classes.arrowPrev} onClick={onClick} />
}

const ProductImageSlider = ({ product }) => {
  const images = [product.img, product.img2].filter(Boolean)
  const slides = images.length
    ? images
    : [undefined]

  if (slides.length === 1) {
    return (
      <img
        className={classes.img}
        src={
          slides[0]
            ? CONSTANTS.HTTP_SERVER_URL_images + slides[0]
            : CONSTANTS.PRODUCT_IMAGE_PATH
        }
        alt={product.name}
      />
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className={classes.gallery}>
      <Slider {...settings}>
        {slides.map(filename => (
          <div key={filename}>
            <img
              className={classes.img}
              src={CONSTANTS.HTTP_SERVER_URL_images + filename}
              alt={product.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductImageSlider
