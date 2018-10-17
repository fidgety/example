import React from "react";
import { array, func, object, bool } from "prop-types";

import ResultsSummary from "components/ResultsSummary";
import ResultsList from "components/ResultsList";
import Detail from "components/Detail";
import Spinner from "components/Spinner";

const SearchResults = ({
  detailLoading,
  detail,
  results,
  onItemClosed,
  onItemClicked
}) => (
  <React.Fragment>
    <ResultsSummary results={results} />
    {results.length > 0 && (
      <ResultsList
        results={results}
        onItemClosed={onItemClosed}
        onItemClicked={onItemClicked}
      />
    )}
    {!results.length && <Spinner />}
    <Detail
      detail={detail}
      detailLoading={detailLoading}
      onItemClosed={onItemClosed}
    />
  </React.Fragment>
);

SearchResults.propTypes = {
  detail: object, //eslint-disable-line
  results: array.isRequired, //eslint-disable-line
  onItemClosed: func.isRequired,
  onItemClicked: func.isRequired,
  detailLoading: bool.isRequired
};

export default SearchResults;
