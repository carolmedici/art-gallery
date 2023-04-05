import React from "react";


const Cards = ({items,styles}) => {
 return(
    <ul className={styles.gallery__cards}>
            {items.map((item)=>{
                return(
                    <li key={item.id} className={styles.gallery__card}>
                        <img
                        className={styles.gallery__image}
                        src={item.image}
                        alt={item.titule}
                        />
                        <p className={styles.gallery__description}>{item.titule}</p>
                        <div>
                            <p className={styles.gallery__author}>{item.author}</p>
                            <span>
                                
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
 );
}

export default Cards