import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { projects } from "../../assets/datastore";
import "../../css/bootstrap.min.css";
import { images } from "../../assets/img/project/1.jpg";
let mediaScreen = false;
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" className="tool_tip" {...props}>
    View Next
  </Tooltip>
);

function carouselItem(project) {
  var v = window.matchMedia("(max-width: 600px)");
  mediaScreen = v.matches;
  // const url = project.projectImageName;
  console.log(images);
  return (
    <Carousel.Item>
      <a href={"#project" + project.id}>
        {!mediaScreen ? (
          <img
            className="slideshow__img"
            src={require("../../assets/img/project/" + project.id + ".jpg")}
            alt="Project Image"
          />
        ) : (
          <img
            className="slideshow__img"
            src={require("../../assets/img/project/alt/" + project.id + ".jpg")}
            alt="Project Image"
          />
        )}
      </a>
      <Carousel.Caption>
        <div className="projectTitle">{project.projectTitle}</div>
        <div className="projectDetails">{project.projectOverview}</div>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

function projectContainer(project, len) {
  return (
    <div className="container" id={"project" + project.id}>
      <div className="grid-container__projects">
        <div className="grid-item__projects">
          <div className="tag__wrapper">
            <div className="tag">{project.projectType}</div>
          </div>
        </div>
        <div className="grid-item__projects">
          <div className="project__info">
            <p className="__title">{project.projectTitle}</p>
            {/* <div className="grid-container__projectinfo"> */}

            <p className="project__desc">{project.projectDetails}</p>
            <p className="left-wrapper">
              <a href="/about" class="btn learnmore-button">
                More Info
              </a>
            </p>
            {project.id !== len ? (
              <p className="viewnext">
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <a href={"#project" + (project.id + 1)}>
                    <img
                      className="viewnext__img"
                      src={require("../../assets/img/icons/down.png")}
                      alt=""
                    />
                  </a>
                </OverlayTrigger>
              </p>
            ) : (
              <div></div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
export default function Project() {
  return (
    <div>
      <div className="container" id="main">
        <h1 className="heading">
          <span className="name">PRO</span>JECTS
        </h1>
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
      {projects.map((project) => {
        return projectContainer(project, projects.length);
      })}
    </div>
  );
}
