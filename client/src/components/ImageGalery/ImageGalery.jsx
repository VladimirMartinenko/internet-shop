import React from 'react'
// import ImageGallery from 'react-image-gallery'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
// import "~react-image-gallery/styles/scss/image-gallery.scss";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { Carousel } from "react-carousel-minimal";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './ImageGalery.module.scss'

// const captionStyle = {
//   fontSize: "2em",
//   fontWeight: "bold"
// };

const ImageGalery = () => {
  function myRenderItem () {
    return (
      <>
        <img
          style={{}}
          className={styles.img}
          src='/staticImages/slide-new-collection.jpg'
          title='New season collection'
        />
        <p style={{}} className={styles.description}>
          New season collection
        </p>
      </>
    )
  }
  function myRenderItem2 () {
    return (
      <>
        <img
          style={{}}
          className={styles.img}
          src='/staticImages/slide-footwear.jpg'
          title='Footwear that fits'
        />
        <p style={{}} className={styles.description}>
          Footwear that fits
        </p>
      </>
    )
  }
  function myRenderItem3 () {
    return (
      <>
        <img
          style={{}}
          className={styles.img}
          src='/staticImages/slide-street-style.jpg'
          title='Street style looks'
        />
        <p style={{}} className={styles.description}>
          Street style looks
        </p>
      </>
    )
  }

  const images = [
    {
      renderItem: myRenderItem
    },
    {
      renderItem: myRenderItem2
    },
    {
      renderItem: myRenderItem3
    }
  ]
  return (
    <section className={styles.slide}>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={2000}
      />
    </section>
  )
}

export default ImageGalery
