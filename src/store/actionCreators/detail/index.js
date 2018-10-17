import searchResult from "_exampleResponses/result";

export const get = productId => dispatch => {
  Promise.resolve(searchResult).then(result => {
    dispatch({
      type: "DETAIL",
      result,
      productId
    });
  });
};

export const remove = () => ({
  type: "DETAIL_CLOSE"
});
