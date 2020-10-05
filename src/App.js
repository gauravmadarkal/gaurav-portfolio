import React from "react";
import "./App.css";
import "./css/font-awesome.min.css";
import Navbar from "./js/components/navbar";
import "./css/main.css";
import { aboutme } from "./assets/datastore";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <footer>
          <p className="footer">
            <a class="footerIcons" href={aboutme.Instagramlink}>
              <i class="fa fa-instagram fa-2x"></i>
            </a>
            <a class="footerIcons" href={aboutme.Facebooklink}>
              <i class="fa fa-facebook fa-2x"></i>
            </a>
            <a class="footerIcons" href={aboutme.Twitterlink}>
              <i class="fa fa-twitter fa-2x"></i>
            </a>
            <a class="footerIcons" href={aboutme.Githublink}>
              <i class="fa fa-github fa-2x"></i>
            </a>
            <a class="footerIcons" href={aboutme.Mediumlink}>
              <i class="fa fa-medium fa-2x"></i>
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
