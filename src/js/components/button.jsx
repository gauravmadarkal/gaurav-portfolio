import React from "react";

export default function CustomButton({ text, lhref }) {
  return (
    <a href={lhref} class="btn learnmore-button">
      {text}
    </a>
  );
}
