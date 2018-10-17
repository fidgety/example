import ReactDOM from "react-dom";
import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

export default props => {
  console.log(props.detail);
  if (!props.detail) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal onClick={() => props.onItemClosed()}>
      <div onClick={() => props.onItemClosed()}>X</div>
      <h1>{props.detail.Title}</h1>
      <img src={props.detail.ImageUrls[0].ImageUrl} alt="card" />
    </Modal>,
    document.getElementById("modal")
  );
};
