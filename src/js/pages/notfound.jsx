import React from "react";

export default function NotFound() {
  return (
    <div className="container notfound">
      <div className="notfound-grid">
        <div className="notfound-grid__item">
          <img
            className="notfound__img"
            src={require("../../assets/img/icons/notfound.jpg")}
          />
        </div>
        <div className="notfound-grid__item">
          <p className="notfound__message boring-text">
            I am GROOT?? <br />
            Well in GROOT it means,
            <br />
            <span className="highlight big">Are you lost?</span>
          </p>
          <div>
            <p>Let's go back Home</p>
            <a href="/home">
              <img
                className="icon_img"
                src={require("../../assets/img/icons/back.png")}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
