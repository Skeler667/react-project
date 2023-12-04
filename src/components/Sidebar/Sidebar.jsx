import React from 'react'
import styles from "../../styles/Sidebar.module.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories)
  return (
    // react-bootsrtap response // 700px very // 500px biggest //
    <div className={styles.sidebarPadding}>
    <section className={styles.sidebar}>
      <div className={styles.flex}>
        <div>
        <div>
          <div className={styles.title}>CATEGORIES</div>

      </div>
        <nav>
          <ul className={styles.menu}>
            {list.map(({ id, name}) => (
              <li key={id}>
                <NavLink
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
                to={`/categories/${id}`}>
                    {name}
                </NavLink>
              </li>
              ))}
          </ul>
        </nav>

        <div className={styles.footer}>
            <a href="/help"
            target="_blank"
            className={styles.link}>
              help 
            </a>     
            <a href="/terms"
             target="_blank"
             className={styles.link}
             style={{textDecoration:'underline'}}>
               Terms & Conditions
            </a>     
            
        </div>
        </div>
        <div className={styles.trash}>
          <div className={styles.title_sale}>NEW $TUFF</div>
          <div className={styles.title_sale}>BIG CHOICE</div>
          <div className={styles.title_sale}>NEW YEAR'S SALE</div>
          </div>
        </div>
        
    </section>
    
    </div>
    
  )
}

export default Sidebar