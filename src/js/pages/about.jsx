import React from "react";
import { aboutme } from "../../assets/datastore";
import "../../assets/img/about/1.jpg";
import PieChart from "../components/piechart";
import CustomButton from "../components/button";
let mediaScreen = false;
export default function About() {
  var v = window.matchMedia("(max-width: 600px)");
  mediaScreen = v.matches;
  const images = [];
  for (let i = 1; i <= 4; i++) {
    images.push(
      <div className={"image-item" + i}>
        <img
          className="about-image"
          src={require("../../assets/img/about/" + i + ".jpg")}
          alt={"image" + i}
        />
      </div>
    );
  }
  return (
    <div>
      <div className="container about">
        {/* <div className="container__about"> */}
        <p style={{ marginTop: "20px" }}>Home &gt; About</p>
        <div className="image-grid">
          {images}
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
        <p className="section_header bold centered">Tech Stack</p>
        <div className="widget-grid">
          {aboutme.techStack.map((tech) => {
            // console.log(tech);
            if (mediaScreen) {
              if (tech.show)
                return <PieChart title={tech.title} value={tech.value} />;
            } else {
              return <PieChart title={tech.title} value={tech.value} />;
            }
          })}
        </div>
        <div className="inline-display">
          <p className="centered">
            <CustomButton lhref="/contact" text="Contact me" />
          </p>
        </div>
      </div>
    </div>
  );
}
