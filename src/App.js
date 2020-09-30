import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/font-awesome.min.css";
import Navbar from "./js/components/navbar";
import "./css/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./js/components/home";
import About from "./js/components/about";
import Contact from "./js/components/contact";
import Work from "./js/components/work";
import Project from "./js/components/project";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <footer>
          <p className="footer">
            <a class="footerIcons" href="#">
              <i class="fa fa-instagram fa-2x"></i>
            </a>
            <a class="footerIcons" href="#">
              <i class="fa fa-facebook fa-2x"></i>
            </a>
            <a class="footerIcons" href="#">
              <i class="fa fa-twitter fa-2x"></i>
            </a>
            <a class="footerIcons" href="#">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
