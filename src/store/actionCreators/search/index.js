import search from "data/search";

// showing off some array functions...
const getUniqueResults = ({ data }) =>
  data.Products.reduce(
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

  search(searchTerm)
    .then(getUniqueResults)
    .then(results => {
      dispatch({
        type: "RESULTS",
        results
      });
    });
};
