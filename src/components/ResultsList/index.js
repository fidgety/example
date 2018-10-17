import React from "react";
import styled from "styled-components";
import Result from "components/Result";

const ResultsContainer = styled.div``;

const Results = ({ results }) => {
  const resultsCollection = results.map(result => <Result />);
  return <ResultsContainer>{resultsCollection}</ResultsContainer>;
};

Results.defaultProps = {};

export default Results;
