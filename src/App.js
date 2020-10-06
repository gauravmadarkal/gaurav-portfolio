import React from "react";
import "./App.css";
import "./css/font-awesome.min.css";
import Navbar from "./js/components/navbar";
import "./css/main.css";
import Footer from "./js/components/footer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
