import detail from "data/detail";

const loading = () => ({
  type: "DETAIL_LOADING"
});

export const get = productId => dispatch => {
  dispatch(loading());
  detail(productId).then(result => {
    dispatch({
      type: "DETAIL",
      result
    });
  });
};

export const remove = () => ({
  type: "DETAIL_CLOSE"
});
