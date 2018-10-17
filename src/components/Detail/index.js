import ReactDOM from "react-dom";
import React from "react";

export default props => {
  console.log(props);
  if (!props.detail) {
    return null;
  }

  return ReactDOM.createPortal(
    <div>dasdasD</div>,
    document.getElementById("modal")
  );
};
