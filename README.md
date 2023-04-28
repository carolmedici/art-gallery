# Art Gallery

This is the first gallery project I've made using React and a json file with the images. Enjoy :)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the cards with the works of some artists on display in the gallery.
- Filter cards by artist name

### Screenshot

![](https://github.com/carolmedici/art-gallery/blob/main/public/src/Images/print2.png)
![](https://github.com/carolmedici/art-gallery/blob/main/public/src/Images/print.png)

### Links

- Solution URL: [https://github.com/carolmedici/art-gallery](https://github.com/carolmedici/art-gallery)
- Live Site URL: [https://artgallery-eight.vercel.app/](https://artgallery-eight.vercel.app/)

## My process

### Built with

- SCSS 
- [React](https://reactjs.org/) - JS library


### What I learned

I learned to create a json file and also how to use the filter method to create a new array newPhotos that contains only the images whose tag property is equal to the selected tag.

Check out some code: 



```js
const Gallery = () => {
    const [items, setItems] = useState(photos);
    const tags = [...new Set(photos.map((valor) => valor.tag))];
    
    const PhotosFilter = (tag) => {
        const newPhotos = photos.filter ((photo) => {
            return photo.tag === tag;
        });

        setItems (newPhotos);
    }
    return ( 
        <section className={styles.gallery}>
        <h2>Browse the gallery</h2>
        <Tags tags={tags} PhotosFilter={PhotosFilter} setItems={setItems}/>
        <Cards items={items} styles={styles} />
        </section>
     );
}
 
export default Gallery;
```


### Continued development

I will continue studying React library and learn to consume an API

### Useful resources

- [React JS](https://legacy.reactjs.org/) - The library contains great documents and tutorials.


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




