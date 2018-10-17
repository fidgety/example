import React from "react";
import styled from "styled-components";
import Result from "components/Result";
import { array, func } from "prop-types";
import { background, border } from "styles/colors";

const ResultsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${border};
  ${background};
  margin-top: 20px;
`;

const ResultWrapper = styled.li`
  width: 100%;
  padding: 10px;

  @media only screen and (min-width: 600px) {
    & {
      width: 50%;
    }
  }

  @media only screen and (min-width: 800px) {
    & {
      width: 33%;
    }
  }

  @media only screen and (min-width: 1000px) {
    & {
      width: 25%;
    }
  }
`;

const Results = ({ results, onItemClosed, onItemClicked }) => {
  const resultsCollection = results.map(
    ({ MoonpigProductNo, ProductImage }) => (
      <ResultWrapper key={MoonpigProductNo}>
        <Result
          imageSrc={ProductImage.Link.Href}
          id={MoonpigProductNo}
          onItemClosed={onItemClosed}
          onItemClicked={onItemClicked}
        />
      </ResultWrapper>
    )
  );
  return <ResultsContainer>{resultsCollection}</ResultsContainer>;
};

Results.propTypes = {
  results: array.isRequired, //eslint-disable-line
  onItemClosed: func.isRequired,
  onItemClicked: func.isRequired
};

export default Results;
