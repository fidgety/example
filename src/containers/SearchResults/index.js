import React from "react";
import { array, func } from "prop-types";

import ResultsSummary from "components/ResultsSummary";
import ResultsList from "components/ResultsList";
import Detail from "components/Detail";

const SearchResults = ({ detail, results, onItemClosed, onItemClicked }) => (
  <React.Fragment>
    <ResultsSummary results={results} />
    <ResultsList
      results={results}
      onItemClosed={onItemClosed}
      onItemClicked={onItemClicked}
    />
    <Detail detail={detail} onItemClosed={onItemClosed} />
  </React.Fragment>
);

SearchResults.propTypes = {
  detail: array.isRequired, //eslint-disable-line
  results: array.isRequired, //eslint-disable-line
  onItemClosed: func.isRequired,
  onItemClicked: func.isRequired
};

export default SearchResults;
