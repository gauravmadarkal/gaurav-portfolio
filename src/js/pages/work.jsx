import React from "react";
import { workHistory, aboutme } from "../../assets/datastore";

function workContainer(work, len) {
  return (
    <div className="container__work" id={"work" + work.id}>
      <div className="work__grid">
        <div className="work_gridItem item1">
          <p className="workTitle">{work.workTitle}</p>
          <p className="workDate">{work.date}</p>
          <p className="workOrg">{work.organisation}</p>
        </div>
        <div className="work_gridItem">
          <p className="short_heading">Responsibilities</p>
          <p className="workDesc">{work.details}</p>
        </div>
        {work.id !== len ? (
          <p className="viewnext nobounce">
            <a href={"#work" + (work.id + 1)}>
              <img
                className="viewnext__img"
                src={require("../../assets/img/icons/down.png")}
                alt=""
              />
            </a>
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default function Work() {
  return (
    <div>
      <div className="container">
        <p style={{ marginTop: "20px" }}>Home &gt; Work</p>
        <div className="image__container">
          <div className="work__grid-item1">
            <img
              className="work"
              src={require("../../assets/img/work/work-bg-3.jpg")}
            ></img>
          </div>
          <div className="work__grid-item2">
            <p className="viewnext">
              <a style={{ textDecoration: "none" }} href="#mywork">
                <p className="button-text">My Work</p>
                <img
                  className="viewnext__img"
                  src={require("../../assets/img/icons/down.png")}
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <h3 className="section__header">{aboutme.workDesc}</h3>
      <p className="centered">
        <a href="/contact" class="btn learnmore-button">
          Contact Me
        </a>
      </p>
      <div className="sub-heading" id="mywork">
        WORK HISTORY
      </div>
      {workHistory.map((work) => {
        return workContainer(work, workHistory.length);
      })}
    </div>
  );
}
