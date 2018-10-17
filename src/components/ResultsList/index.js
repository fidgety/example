import React from "react";
import styled from "styled-components";
import Result from "components/Result";
import { array } from "prop-types";
import { background, border } from "styles/colors";

const ResultsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${border};
  ${background};
  margin-top: 20px;
`;

const ResultWrapper = styled.li`
  width: 33%;
  padding: 10px;
`;

const Results = ({ results, onItemClosed, onItemClicked }) => {
  const resultsCollection = results.map(({ ProductId, ProductImage }) => (
    <ResultWrapper key={ProductId}>
      <Result
        imageSrc={ProductImage.Link.Href}
        id={ProductId}
        onItemClosed={onItemClosed}
        onItemClicked={onItemClicked}
      />
    </ResultWrapper>
  ));
  return <ResultsContainer>{resultsCollection}</ResultsContainer>;
};

Results.propTypes = {
    results: array.isRequired //eslint-disable-line
};

export default Results;
