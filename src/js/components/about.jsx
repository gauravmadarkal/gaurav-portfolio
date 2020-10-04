import React from "react";
import { aboutme } from "../../assets/datastore";
import "../../assets/img/about/1.jpg";
export default function About() {
  return (
    <div>
      <div className="container about">
        {/* <div className="container__about"> */}
        <p style={{ marginTop: "20px" }}>Home &gt; About</p>
        <div className="image-grid">
          <div className="image-item1">
            <img
              className="about-image"
              src={require("../../assets/img/about/1.jpg")}
              alt=""
            />
          </div>
          <div className="image-item2">
            <img
              className="about-image"
              src={require("../../assets/img/about/2.jpg")}
              alt=""
            />
          </div>
          <div className="image-item3">
            <img
              className="about-image"
              src={require("../../assets/img/about/3.jpg")}
              alt=""
            />
          </div>
          <div className="image-item4">
            <img
              className="about-image"
              src={require("../../assets/img/about/4.jpg")}
              alt=""
            />
          </div>
          <div className="image-item5">
            <p className="viewnext smallersize">
              <a style={{ textDecoration: "none" }} href="#details">
                <img
                  className="viewnext__img"
                  src={require("../../assets/img/icons/down.png")}
                  alt=""
                />
              </a>
            </p>
          </div>
          <div className="image-item6">
            <span>Hobbies!!</span>
          </div>
        </div>
      </div>
      <div className="sub-heading" id="details">
        About Me.
      </div>
      {/* <div style={{ margin: "10px", background: "#dbe3e5" }}> */}
      <div className="aboutme__desc">
        <p>{aboutme.details}</p>
        <div className="inline-display">
          <p className="centered">
            <a href="/contact" class="btn learnmore-button">
              Contact me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
