import React, { useEffect, useState } from 'react'
import styles from '../../styles/Product.module.css'
import ROUTES from '../../utils/routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteToCart, addItemToCart } from '../../features/user/userSlice';

const SIZES = [4, 4.5, 5];

const Product = (item) => {
const { description, price, title, images, id } = item;
const dispatch = useDispatch();
const { favoriteCart } = useSelector(({ user }) => user);
const [currentImage, setCurrentImage] = useState();
const [currentSize, setCurrentSize] = useState();

useEffect(() => {
  if(!images.length) return;
  setCurrentImage(images[0]);
}, [images])

const addToCart = () => {
  dispatch(addItemToCart(item));
};

const addFavorite = () => {
  dispatch(addFavoriteToCart(item))
}

const isFavoriteNow = () => {
  return favoriteCart.map((e) => e.id == id ? true : false )
}

  return (
    <section className={styles.product}>
    <div className={styles.images}>
      <div
        className={styles.current}
        style={{ backgroundImage: `url(${currentImage})` }}
      />
      <div className={styles["images-list"]}>
        {images.map((image, i) => (
          <div
            key={i}
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.price}>{price}$</div>
      <div className={styles.color}>
        <span>Color:</span> Green
      </div>
      <div className={styles.sizes}>
        <span>Sizes:</span>

        <div className={styles.list}>
          {SIZES.map((size) => (
            <div
              onClick={() => setCurrentSize(size)}
              className={`${styles.size} ${
                currentSize === size ? styles.active : ""
              }`}
              key={size}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.actions}>
        <button
          onClick={addToCart}
          className={styles.add}
          disabled={!currentSize}
        >
          Add to cart
        </button>
        <button
        className={styles.favourite}
        onClick={addFavorite}
        >
          Add to favourites
          </button>
      </div>

      <div className={styles.bottom}>
        <div className={styles.purchase}>19 people purchased</div>

        <Link to={ROUTES.HOME}>Return to store</Link>
      </div>
    </div>
  </section>
  )
}

export default Product