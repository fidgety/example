import searchResults from "_exampleResponses/results";

export default searchTerm => dispatch => {
  dispatch({
    type: "SEARCH",
    searchTerm
  });

  Promise.resolve(searchResults).then(({ Products: results }) => {
    dispatch({
      type: "RESULTS",
      results
    });
  });
};
