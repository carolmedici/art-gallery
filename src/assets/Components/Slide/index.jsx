import React from 'react';
import ImageGallery from 'react-image-gallery';
import styles from './Slide.module.scss'
import course from './course.png'
import exhibition from './gaudi.png'
import exhibition2 from './tarsila.png'


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
                        
        ]
        return (
            <ImageGallery items={images} autoPlay={true} />
        );
    }
}
