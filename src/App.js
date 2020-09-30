import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/font-awesome.min.css";
import Navbar from "./js/components/navbar";
import "./css/main.css";

let showMenu = false;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleMenu() {
    // var menuBtn = document.getElementById("menu");
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
      <div className="App">
        <header>
          <div className="menu-btn" id="menu" onClick={() => this.toggleMenu()}>
            <i id="burger-icon" class="fa fa-bars fa-2x"></i>
          </div>
          <Navbar></Navbar>
        </header>
      </div>
    );
  }
}

export default App;
