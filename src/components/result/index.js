import React from "react";
import styled from "styled-components";
import { number, string, func } from "prop-types";
import { border } from "styles/colors";

const ResultsContainer = styled.div`
  ${border};
  padding: 10px;
  background: white;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const Result = ({ id, imageSrc, onItemClicked }) => (
  <ResultsContainer
    onClick={() => {
      onItemClicked(id);
    }}
  >
    <Image src={imageSrc} />
  </ResultsContainer>
);

Result.propTypes = {
  id: number.isRequired,
  imageSrc: string.isRequired,
  onItemClicked: func.isRequired
};

export default Result;
