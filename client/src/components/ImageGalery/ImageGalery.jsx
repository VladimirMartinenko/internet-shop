import React from 'react';
// import ImageGallery from 'react-image-gallery'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/scss/image-gallery.scss'
// import "~react-image-gallery/styles/scss/image-gallery.scss";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './ImageGalery.module.scss'


// const captionStyle = {
//   fontSize: "2em",
//   fontWeight: "bold"
// };



const ImageGalery = () => {
  function myRenderItem () {
    return <>
          {/* <img style={{ width:'1500px',height:'700px',objectFit:'cover'}} className="image-gallery-image" src="https://picsum.photos/id/1018/1000/600/" title="hello world" />
          <span style={{ left: '45%' }} className="image-gallery-description">hello world</span> */}
          <img style={{ }} className={styles.img} src="/staticImages/osteo4.png" title="hello world" />
          <span style={{ left: '10%' }} className="image-gallery-description">hello world</span>
      </>;
  };
  function myRenderItem2 () {
    return <>
          {/* <img style={{ width:'1500px',height:'700px',objectFit:'cover'}} className="image-gallery-image" src="https://picsum.photos/id/1018/1000/600/" title="hello world" />
          <span style={{ left: '45%' }} className="image-gallery-description">hello world</span> */}
          <img style={{ }} className={styles.img} src="/staticImages/original-1ugp.jpg" title="hello world" />
          <span style={{ left: '10%' }} className="image-gallery-description">hello world</span>
      </>;
  };
  function myRenderItem3 () {
    return <>
          {/* <img style={{ width:'1500px',height:'700px',objectFit:'cover'}} className="image-gallery-image" src="https://picsum.photos/id/1018/1000/600/" title="hello world" />
          <span style={{ left: '45%' }} className="image-gallery-description">hello world</span> */}
          <img style={{ }} className={styles.img} src="/staticImages/istockphoto-470454993-612x612.jpg" title="hello world" />
          <span style={{ left: '10%' }} className="image-gallery-description">hello world</span>
      </>;
  };
  
  const images = [
    {
      renderItem: myRenderItem,
    },
    {
      renderItem: myRenderItem2,
    },
    {
      renderItem: myRenderItem3,
    },
  ];
  return (
     
      <div className={styles.slide}>
        <ImageGallery items={images}
        showThumbnails = {false}
        showFullscreenButton = {false}
        showPlayButton = {false}
        autoPlay = {true}
        />
      </div>


  );
}

export default ImageGalery;
