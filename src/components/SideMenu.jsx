import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../context/navState';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import LOGO from "../images/logo.svg";

const Menu = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 264px;
  height: 100%;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #191919;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
    <div>
      <MenuLink>
      <Link to={ROUTES.HOME}>
      <img src={LOGO} alt="Stuff" />
        </Link>
        </MenuLink>
      <MenuLink>
      <Link to={ROUTES.CART}>
      Cart
        </Link>
        </MenuLink>
        <MenuLink>
      <Link to={ROUTES.CART}>
      Favorite
        </Link>
        </MenuLink>
      </div>
    </>
  ),
};
