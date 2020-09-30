import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Work from "./work";
import Project from "./project";
let showMenu = false;
class Navbar extends React.Component {
  toggleMenu() {
    var burgerIcon = document.getElementById("burger-icon");
    var menuNav = document.getElementById("menu-nav");
    var nav = document.getElementById("nav");
    if (!showMenu) {
      burgerIcon.className = "fa fa-times fa-2x";
      showMenu = true;
      menuNav.classList.add("open");
      nav.classList.add("open");
    } else {
      burgerIcon.className = "fa fa-bars fa-2x";
      showMenu = false;
      menuNav.classList.remove("open");
      nav.classList.remove("open");
    }
  }
  render() {
    return (
      <div>
        <Router>
          {/* <div className="icon"> */}
          <a href="/home">
            <img className="icon" src={require("../../assets/img/g.png")}></img>
          </a>
          {/* </div> */}
          <div className="menu-btn" id="menu" onClick={() => this.toggleMenu()}>
            <i id="burger-icon" class="fa fa-bars fa-2x"></i>
          </div>
          <nav className="nav" id="nav">
            <ul className="menu-nav" id="menu-nav">
              <li className="menu-nav__item" onClick={() => this.toggleMenu()}>
                <Link to="/">
                  <a href="#" className="menu-nav__link">
                    Home
                  </a>
                </Link>
              </li>
              <li className="menu-nav__item" onClick={() => this.toggleMenu()}>
                <Link to="/about">
                  <a href="#about" className="menu-nav__link">
                    About
                  </a>
                </Link>
              </li>
              <li className="menu-nav__item" onClick={() => this.toggleMenu()}>
                <Link to="/contact">
                  <a href="#contact" className="menu-nav__link">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="menu-nav__item" onClick={() => this.toggleMenu()}>
                <Link to="/projects">
                  <a href="#projects" className="menu-nav__link">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="menu-nav__item" onClick={() => this.toggleMenu()}>
                <Link to="/work">
                  <a href="#work" className="menu-nav__link">
                    Work
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
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
{
  /* <i class="fa fa-times" aria-hidden="true"></i> */
}
