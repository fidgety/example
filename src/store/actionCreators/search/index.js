export default searchTerm => dispatch => {
  dispatch({
    type: "SEARCH",
    searchTerm
  });

  Promise.resolve([{}, {}, {}]).then(results => {
    dispatch({
      type: "RESULTS",
      results
    });
  });
};
