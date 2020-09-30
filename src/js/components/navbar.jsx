import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Work from "./work";
import Project from "./project";
export default function Navbar() {
  return (
    <Router>
      <nav className="nav" id="nav">
        <ul className="menu-nav" id="menu-nav">
          <li className="menu-nav__item">
            <Link to="/">
              <a href="" className="menu-nav__link">
                Home
              </a>
            </Link>
          </li>
          <li className="menu-nav__item">
            <Link to="/about">
              <a href="" className="menu-nav__link">
                About
              </a>
            </Link>
          </li>
          <li className="menu-nav__item">
            <Link to="/contact">
              <a href="" className="menu-nav__link">
                Contact
              </a>
            </Link>
          </li>
          <li className="menu-nav__item">
            <Link to="/projects">
              <a href="" className="menu-nav__link">
                Projects
              </a>
            </Link>
          </li>
          <li className="menu-nav__item">
            <Link to="/work">
              <a href="" className="menu-nav__link">
                Work
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}
{
  /* <i class="fa fa-times" aria-hidden="true"></i> */
}
