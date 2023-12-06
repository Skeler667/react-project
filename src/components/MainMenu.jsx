import React, { useRef, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from '../context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

import { toggleForm } from "../features/user/userSlice";
import AVATAR from "../images/avatar.jpg";

import styles from "../styles/Header.module.css";
import { useGetProductsQuery } from "../features/api/apiSlice";

import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../utils/routes"
// import { ROUTES } from "../../utils/routes";
// import AVATAR from "../images/avatar.jpg";

import LOGO from "../images/logo.svg"
import { useDispatch, useSelector } from 'react-redux';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: black none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
  padding-left: 4%;
  padding-right: 0px;
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const { currentUser, cart } = useSelector(({ user }) => user);
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  // dqwasedqwardeqw@dqwqawsrfWE3EWDFWEDFEWDWEDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>

        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>

        <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {!!cart.length && (
              <span className={styles.count}>{cart.length}</span>
            )}
          </Link>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;
