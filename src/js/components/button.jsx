import React from "react";

export default function CustomButton({ text, lhref, onSubmit }) {
  if(typeof lhref === 'string' && lhref.indexOf('publication_4') > -1){
    return (
      <a href={require('../../assets/docs/publication_4.pdf')} class="btn learnmore-button">
      {text}
    </a>
    )
  }else if (typeof lhref === 'string' && lhref.indexOf('publication_5') > -1){
    return (
      <a href={require('../../assets/docs/publication_5.pdf')} class="btn learnmore-button">
      {text}
    </a>
    )
  }
  return onSubmit != undefined ? (
    <a class="btn learnmore-button" onClick={(e) => onSubmit(e.target)}>
      {text}
    </a>
  ) : 
  (
    <a href={lhref} class="btn learnmore-button">
      {text}
    </a>
  );
}
