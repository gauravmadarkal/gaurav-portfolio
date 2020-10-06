import React from "react";

export default function CustomButton({ text, lhref, onSubmit }) {
  return onSubmit != undefined ? (
    <a class="btn learnmore-button" onClick={(e) => onSubmit(e.target)}>
      {text}
    </a>
  ) : (
    <a href={lhref} class="btn learnmore-button">
      {text}
    </a>
  );
}
