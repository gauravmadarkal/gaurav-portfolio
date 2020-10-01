import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/font-awesome.min.css";
import Navbar from "./js/components/navbar";
import "./css/main.css";
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
            {/* <p className="copyrights">
              Made with <i class="fa fa-heart"></i> by Gaurav Madarkal
            </p> */}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
