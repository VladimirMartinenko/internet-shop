import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {nextSlideSucces}from '../../redux/actions/carouselActionCreators'
import cx from "classnames";
import classes from './Slider.module.scss';
import CONSTANTS from '../../constants';
import { Link, useHistory } from 'react-router-dom';

const Slider = () => {
  const history = useHistory();
  const { slider, isLoading, error } = useSelector(state => state.slider);
  console.log(slider);
  const { currentIndices } = useSelector(state => state.carousel);

  const dispatch = useDispatch();
  const nextSlide = () => {
    console.log('inside the dipatch');
    dispatch(nextSlideSucces(slider.length));
    console.log('1');
  };
  useEffect(() => {
    // const next = (current + 1) % length;
    
      const id = setTimeout(
        () => nextSlide(),
         2000
      );
      return () => clearTimeout(id);
    
  }, [currentIndices]);

  return (
    <>
        <section  className={cx(classes.slideShowMain)}>
        {slider && slider.map((image, index) => {
          let isCurrentImage =
            index >= currentIndices[0] &&
            index <= currentIndices[1];
          return (
            <Link  key={image.Product.name} className={cx(classes.slideShowLink)} >
              {isCurrentImage && (
                <>
                <img
                  className={cx(classes.image)}
                  src={CONSTANTS.HTTP_SERVER_URL_images+image.Product.img}
                  alt={image.Product.name}
                  onClick={()=> history.push('/product/'+ image.Product.id)}
                />
                <p className={cx(classes.slideShowName)}>{image.Product.name}</p>
                </>
              )}
            </Link>
          );
        })}
      </section>
      {/* <section  className={cx(classes.slideShowNav)}> */}
        {/*implement navigation */}
        {/* <button onClick={nextSlide}>Next</button>
      </section> */}
    </>
  );
}

export default Slider;
