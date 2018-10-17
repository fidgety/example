import React from "react";
import { array } from "prop-types";

import ResultsSummary from "components/ResultsSummary";

const SearchResults = ({ results }) => (
  <React.Fragment>
    <ResultsSummary results={results} />
  </React.Fragment>
);

SearchResults.propTypes = {
  results: array.isRequired //eslint-disable-line
};

export default SearchResults;
