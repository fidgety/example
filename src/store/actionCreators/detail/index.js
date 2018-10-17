import detail from "data/detail";

export const get = productId => dispatch => {
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
