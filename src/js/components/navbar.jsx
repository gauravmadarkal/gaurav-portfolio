import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Work from "../pages/work";
import Project from "../pages/project";
import { navLinks } from "../../assets/datastore";
let showMenu = false;
let mediaScreen = false;
class Navbar extends React.Component {
  constructor() {
    super();
    var v = window.matchMedia("(max-width: 600px)");
    mediaScreen = v.matches;
  }
  toggleMenu() {
    var burgerIcon = document.getElementById("burger-icon");
    var menuNav = document.getElementById("menu-nav");
    var nav = document.getElementById("nav");
    if (!showMenu) {
      if (!mediaScreen) {
        burgerIcon.className = "fa fa-times fa-3x";
      } else {
        burgerIcon.className = "fa fa-times fa-2x";
      }
      showMenu = true;
      menuNav.classList.add("open");
      nav.classList.add("open");
    } else {
      if (!mediaScreen) {
        burgerIcon.className = "fa fa-bars fa-3x";
      } else {
        burgerIcon.className = "fa fa-bars fa-2x";
      }
      showMenu = false;
      menuNav.classList.remove("open");
      nav.classList.remove("open");
    }
  }
  navLinkItem(title, to, href) {
    return (
      <li className="menu-nav__item" onClick={() => this.toggleMenu()}>
        <Link to={to}>
          <a href={href} className="menu-nav__link">
            {title}
          </a>
        </Link>
      </li>
    );
  }
  Menu() {
    // console.log(mediaScreen);
    return (
      <div>
        <a href="/home">
          <img className="icon" src={require("../../assets/img/g.png")}></img>
        </a>
        <div className="menu-btn" id="menu" onClick={() => this.toggleMenu()}>
          {!mediaScreen ? (
            <i id="burger-icon" class="fa fa-bars fa-3x"></i>
          ) : (
            <i id="burger-icon" class="fa fa-bars fa-2x"></i>
          )}
        </div>
        <nav className="nav" id="nav">
          <ul className="menu-nav" id="menu-nav">
            {navLinks.map((link) => {
              return this.navLinkItem(link.title, link.to, link.href);
            })}
          </ul>
        </nav>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Router>
          {this.Menu(mediaScreen)}
          {/* <Menu toggleMenuHandler={this.toggleMenu} mediaScreen={mediaScreen} /> */}
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/projects" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Navbar;
