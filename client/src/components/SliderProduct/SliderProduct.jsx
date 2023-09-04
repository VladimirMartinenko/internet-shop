import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from './SliderProduct.module.scss'
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import CONSTANTS from "../../constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classes.next}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classes.prev}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

const SliderProduct = () => {
  const history = useHistory()
  const { slider } = useSelector(state => state.slider)
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={classes.main}>
    <div className={classes.slider}>
        <h3  className={classes.slideShowLinkMain}> спеціальна пропозиція</h3>
        <Slider {...settings}>
        {slider &&
          slider.map((image, index) => {
            return(
              <div key={index} className={classes.slideShowMain}>
                  {/* <div className={classes.shadow}> */}
                    <img
                      className={classes.image}
                      src={image.Product.img === undefined ? CONSTANTS.PRODUCT_IMAGE_PATH: CONSTANTS.HTTP_SERVER_URL_images + image.Product.img}
                      alt={image.Product.name}
                      onClick={() =>
                        history.push('/product/' + image.Product.id)
                      }
                    />
                    <h3 className={classes.slideShowLink}>
                      {image.Product.name}
                    </h3>
                    <div className={classes.slideShowLink}>
            {image.Product.price} грн.
            </div>
                  </div>
              // </div>
            )
          })}
        </Slider>
      </div>
      </div>
  );
}

export default SliderProduct;
