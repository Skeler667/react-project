import React from 'react'
import styles from '../../styles/Header.module.css'
import { ROUTES } from './../../utils/routes';
import LOGO from "../../images/logo.svg"
import AVATART from "../../images/avatar.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
  console.log(ROUTES)
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="stuff" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${AVATART})` }} />
          <div className={styles.username}> Guest </div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}> 
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
            type="search"
            name="search"
            id=""
            placeholder='Search for anything...'
            autoComplete='off'
            onChange={() => {}}
            value=""
            />
          </div>

          { false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME}>
            <svg className={styles["icon-fav"]}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
              </svg>
          </Link>

          <Link to={ROUTES.CART}>
            <svg className={styles["icon-cart"]}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
              </svg>
              <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header