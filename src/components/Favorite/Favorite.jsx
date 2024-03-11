import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromFavoriteCart,
  addItemToCartFromFavorite
} from "../../features/user/userSlice";

import styles from "../../styles/Cart.module.css";
import { sumBy } from "../../utils/common";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favoriteCart } = useSelector(({ user }) => user);

  const removeItem = (id) => {
    dispatch(removeItemFromFavoriteCart(id));
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your Favorite</h2>

      {!favoriteCart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favoriteCart.map((item) => {
              const { title, category, images, price, id } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  {/* <div className={styles.price}>{price}$</div> */}

                  <div className={styles.quantity}>
                  </div>

                  <div className={styles.total}>{price}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <div className={styles.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(favoriteCart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={styles.proceed}>Add to cart</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Favorite;