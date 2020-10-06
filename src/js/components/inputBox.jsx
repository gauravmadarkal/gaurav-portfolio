import React from "react";
import PropTypes from "prop-types";

export default function InputBox({
  multiLineInput,
  placeholder,
  label,
  onChangeHandler,
  id,
  errorMsg,
  errorMsgId,
  required,
}) {
  return (
    <div className="inputBox">
      <p className="inputBox__label">
        {required ? "*" : ""} {label}
      </p>
      {!multiLineInput ? (
        <input
          id={id}
          className="inputBox__text"
          placeholder={placeholder}
          onInput={(e) => onChangeHandler(e.target)}
        ></input>
      ) : (
        <textarea
          id={id}
          cols="30"
          rows="4"
          className="inputBox__text"
          placeholder={placeholder}
          onInput={(e) => onChangeHandler(e.target)}
        ></textarea>
      )}
      <p id={errorMsgId} className="errorText">
        {errorMsg}
      </p>
    </div>
  );
}

InputBox.propTypes = {
  multiLineInput: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  errorMsgId: PropTypes.string,
  required: PropTypes.bool.isRequired,
};
