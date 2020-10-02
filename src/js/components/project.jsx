import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { projects } from "../../assets/datastore";
import "../../css/bootstrap.min.css";
import { images } from "../../assets/img/project/1.jpg";
function carouselItem(project) {
  // const url = project.projectImageName;
  console.log(images);
  return (
    <Carousel.Item>
      <a href={"#project" + project.id}>
        <img
          className="slideshow__img"
          src={require("../../assets/img/project/" + project.id + ".jpg")}
          alt="Project Image"
        />
      </a>
      <Carousel.Caption>
        <div className="projectTitle">{project.projectTitle}</div>
        <div className="projectDetails">{project.projectDetails}</div>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default function Project() {
  return (
    <div>
      <div className="container" id="main">
        <h1 className="heading">Projects</h1>
        <Carousel className="slideshow">
          {projects.map((project) => {
            return carouselItem(project);
          })}
        </Carousel>
      </div>
      <h3 className="section__header">
        I do freelancing in Android and web application development, if you have
        any projects in mind, Hit me up!
      </h3>
      <a href="/about" class="btn learnmore-button">
        Contact Me
      </a>
      <div className="container" id="project1">
        <div className="project__info">
          <p className="__title">Hush - Android Application</p>
          <div className="grid-container__projectinfo">
            <div className="grid-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <p className="left-wrapper">
                <a href="/about" class="btn learnmore-button">
                  More Info
                </a>
              </p>
            </div>
            <div className="grid-item">
              <img
                src={require("../../assets/img/icons/android.png")}
                className="project__image"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="project2"></div>
      <div className="container" id="project3"></div>

      <div className="container" id="project4"></div>
      <div className="container" id="project5"></div>
    </div>
  );
}
