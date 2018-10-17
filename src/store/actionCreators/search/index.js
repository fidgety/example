import searchResults from "_exampleResponses/results";

// showing off some array functions...
const uniqueResults = searchResults.Products.reduce(
  ({ results, ids }, result) => {
    if (ids.indexOf(result.ProductId) < 0) {
      return {
        results: results.concat([result]),
        ids: ids.concat([result.ProductId])
      };
    }
    return {
      results,
      ids
    };
  },
  {
    results: [],
    ids: []
  }
).results;

export default searchTerm => dispatch => {
  dispatch({
    type: "SEARCH",
    searchTerm
  });

  Promise.resolve(uniqueResults).then(results => {
    dispatch({
      type: "RESULTS",
      results
    });
  });
};
