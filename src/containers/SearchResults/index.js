import React from "react";
import { array, func } from "prop-types";

import ResultsSummary from "components/ResultsSummary";
import ResultsList from "components/ResultsList";
import Detail from "components/Detail";

const SearchResults = ({ result, results, onItemClosed, onItemClicked }) => {
  console.log(result, results, onItemClosed, onItemClicked, "sss");
  return (
    <React.Fragment>
      <ResultsSummary results={results} />
      <ResultsList
        results={results}
        onItemClosed={onItemClosed}
        onItemClicked={onItemClicked}
      />
      <Detail detail={result} />
    </React.Fragment>
  );
};

SearchResults.propTypes = {
  results: array.isRequired, //eslint-disable-line
  onItemClosed: func.isRequired,
  onItemClicked: func.isRequired
};

export default SearchResults;
