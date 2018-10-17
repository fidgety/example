import React from "react";
import styled from "styled-components";
import { array } from "prop-types";

const Summary = styled.div`
    font-size: 1.3em,
    color: darkgrey;
`;

Summary.displayName = "Summary";

const List = ({ results }) => (
  <React.Fragment>
    <Summary>
      We have
      {` ${results.length} `}
      cards
    </Summary>
  </React.Fragment>
);

List.propTypes = {
  results: array //eslint-disable-line
};

export default List;
