import React from "react";
import "../../css/main.css";
export default function Home() {
  return (
    <div className="container" id="home">
      <div class="grid-container">
        <div className="grid-item image">
          <img
            class="hero-image"
            src={require("../../assets/img/hero_image_1.svg")}
          ></img>
        </div>
        <div class="grid-item intro">
          <h1 class="cover-heading greetings">
            Hi, I'm <span className="name">Gaurav</span>
          </h1>

          <p class="self-description">
            Deeply involved in the designing, developing and maintaining
            software, I also develop Android applications. If you have any
            project in mind, Hit me up!!
          </p>
          <p className="left-wrapper">
            <a href="/about" class="btn learnmore-button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
