import React from "react";
import images from "../../assets/img/work/work-bg-img-2.jpg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" className="tool_tip" {...props}>
    View Next
  </Tooltip>
);

export default function Work() {
  return (
    <div>
      <div className="container">
        <div className="work__container">
          <div className="work__grid-item1">
            <img
              className="work"
              src={require("../../assets/img/work/work-bg-3.jpg")}
            ></img>
          </div>
          <div className="work__grid-item2">
            <p className="viewnext">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <a style={{ textDecoration: "none" }} href={"#project"}>
                  <p className="button-text">My Work</p>
                  <img
                    className="viewnext__img"
                    src={require("../../assets/img/icons/down.png")}
                    alt=""
                  />
                </a>
              </OverlayTrigger>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
