import React from "react";
import "../../css/main.css";
import { aboutme } from "../../assets/datastore";
import CustomButton from "../components/button";
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

          <p class="self-description">{aboutme.shortDesc}</p>
          <p className="left-wrapper">
            <CustomButton lhref="/about" text="Learn More" />
          </p>
        </div>
      </div>
    </div>
  );
}
