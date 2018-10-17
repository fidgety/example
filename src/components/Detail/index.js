import ReactDOM from "react-dom";
import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.75);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
`;

export default props => {
  if (!props.detail) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal>dasdasD</Modal>,
    document.getElementById("modal")
  );
};
