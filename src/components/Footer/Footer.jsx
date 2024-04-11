import React from 'react'
import styles from "../../styles/Footer.module.css"
import { Link } from 'react-router-dom'
import ROUTES from '../../utils/routes'
import LOGO from "../../images/logo.svg"

const Footer = () => {
  return (
    <section className={`${styles.Footer} ${styles.FooterDistance}`}>
      <div className={styles.socFooter}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="stuff" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by <a
        href="https://t.me/LongTime667"
        target='_blank'
        rel="noreferrer">Skeler</a> in 2023
      </div>

      <div className={styles.socials}>
      <a
        href="https://instagram.com"
        target='_blank'
        rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a
        href="https://facebook.com"
        target='_blank'
        rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a
        href="https://youtube.com"
        target='_blank'
        rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </div>
      </div>
    </section>
  )
}

export default Footer