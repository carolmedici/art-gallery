import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './Slide.module.scss';
import course from './course.png';
import exhibition from './gaudi.png';
import exhibition2 from './tarsila.png';


export default class Slide extends React.Component {
  render() {
    const images = [
      {
        original: course,
      },
      {
        original: exhibition,
      },
      {
        original: exhibition2,
      },
    ];
    return (
      <div className={styles.slide}>
        <ImageGallery
          items={images}
          autoPlay={true}
          showFullscreenButton={false}
          showPlayButton={false}
          renderItem={(item) => (
            <div className={styles.slide}>
              <img
                src={item.original}
                alt={item.originalAlt}
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
          )}
        />
      </div>
    );
  }
}
