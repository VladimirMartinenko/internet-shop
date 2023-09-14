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
          src='/staticImages/osteo4.png'
          title='Сучасне протезування'
        />
        <p style={{}} className={styles.description}>
          Сучасне протезування
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
          src='/staticImages/original-1ugp.jpg'
          title='Консультування'
        />
        <p style={{}} className={styles.description}>
          Консультування
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
          src='/staticImages/istockphoto-470454993-612x612.jpg'
          title='Новітні методи остеосинтезу'
        />
        <p style={{}} className={styles.description}>
          Новітні методи остеосинтезу
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
        // slideInterval={10000}
        // slideDuration={10000}
      />
    </section>
  )
}

export default ImageGalery
