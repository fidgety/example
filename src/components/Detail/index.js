import ReactDOM from "react-dom";
import React from "react";
import styled from "styled-components";
import { background, border } from "styles/colors";
import Spinner from "components/Spinner";

const Modal = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const Container = styled.div`
  margin: 3rem auto;
  max-width: 800px;
`;

const Content = styled.div`
  margin-top: 20px;
  ${background};
  ${border};
  padding: 20px;
  @media only screen and (min-width: 600px) {
    & {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Detail = styled.div`
  background: white;
  width: 400px;
  height: 400px;
  padding: 10px;
`;

const Heading = styled.h1`
  font-size: 1.6rem;
`;

const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: lightgrey;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  cursor: pointer;
`;

export default props => {
  if (!props.detail && !props.detailLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal onClick={() => props.onItemClosed()}>
      <Close onClick={() => props.onItemClosed()}>X</Close>
      {!props.detailLoading && (
        <Container>
          <Heading>{props.detail.Title}</Heading>
          <Content>
            <img src={props.detail.ImageUrls[0].ImageUrl} alt="card" />
            <Detail>Select a size...</Detail>
          </Content>
        </Container>
      )}
      {props.detailLoading && <Spinner />}
    </Modal>,
    document.getElementById("modal")
  );
};
