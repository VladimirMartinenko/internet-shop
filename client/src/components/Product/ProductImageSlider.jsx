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

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

const ProductImageSlider = ({ product }) => {
  const images = [product.img, product.img2].filter(Boolean)
  const slides = images.length ? images : [undefined]

  const imageSrc = filename =>
    filename
      ? CONSTANTS.HTTP_SERVER_URL_images + filename
      : CONSTANTS.PRODUCT_IMAGE_PATH

  if (slides.length === 1) {
    return (
      <div className={classes.gallery}>
        <img
          className={classes.img}
          src={imageSrc(slides[0])}
          alt={product.name}
        />
      </div>
    )
  }

  return (
    <div className={classes.gallery}>
      <Slider {...sliderSettings}>
        {slides.map(filename => (
          <div key={filename} className={classes.slide}>
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

export default React.memo(ProductImageSlider, (prev, next) => {
  return (
    prev.product.img === next.product.img &&
    prev.product.img2 === next.product.img2 &&
    prev.product.name === next.product.name
  )
})
