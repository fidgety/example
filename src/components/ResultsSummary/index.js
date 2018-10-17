import React from "react";
import styled from "styled-components";
import { array } from "prop-types";
import { Link } from "react-router-dom";
import { background, border } from "styles/colors";

const Header = styled.div`
  ${background};
  ${border};
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const SearchAgain = styled(Link)``;

const Summary = styled.div`
    font-size: 1.3em,
    color: darkgrey;
`;

Summary.displayName = "Summary";

const List = ({ results }) => (
  <Header>
    <Summary>
      We have
      {` ${results.length} `}
      cards
    </Summary>
    <SearchAgain to="/">Search again</SearchAgain>
  </Header>
);

List.propTypes = {
  results: array //eslint-disable-line
};

export default List;
