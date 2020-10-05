import React from "react";
import { navLinks } from "../../assets/datastore";
import { BrowserRouter as Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * this is a resuable component which does not seem to work with Links
 * hence using the same implementation in navbar
 * @param {*} title
 * @param {*} to
 * @param {*} href
 * @param {*} toggleMenuHandler
 */
//currently below function is dead code

function navLinkItem(title, to, href, toggleMenuHandler) {
  return (
    <li className="menu-nav__item" onClick={() => toggleMenuHandler()}>
      <Link to={to}>
        <a className="menu-nav__link">{title}</a>
      </Link>
    </li>
  );
}

export default function Menu({ toggleMenuHandler, mediaScreen }) {
  console.log(mediaScreen);
  return (
    <div>
      <a href="/home">
        <img className="icon" src={require("../../assets/img/g.png")}></img>
      </a>
      <div className="menu-btn" id="menu" onClick={() => toggleMenuHandler()}>
        {!mediaScreen ? (
          <i id="burger-icon" class="fa fa-bars fa-3x"></i>
        ) : (
          <i id="burger-icon" class="fa fa-bars fa-2x"></i>
        )}
      </div>
      <nav className="nav" id="nav">
        <ul className="menu-nav" id="menu-nav">
          {navLinks.map((link) => {
            return navLinkItem(
              link.title,
              link.to,
              link.href,
              toggleMenuHandler
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
Menu.propTypes = {
  toggleMenuHandler: PropTypes.func.isRequired,
  mediaScreen: PropTypes.bool.isRequired,
};
