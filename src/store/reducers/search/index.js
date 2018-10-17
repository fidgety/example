const initialState = {
  results: [],
  detail: undefined,
  detailLoading: false
};

const search = (state = initialState, action) => {
  if (action.type === "RESULTS") {
    return Object.assign({}, state, {
      results: action.results
    });
  }

  if (action.type === "DETAIL_LOADING") {
    return Object.assign({}, state, {
      detailLoading: true
    });
  }

  if (action.type === "DETAIL") {
    return Object.assign({}, state, {
      detail: action.result,
      detailLoading: false
    });
  }

  if (action.type === "DETAIL_CLOSE") {
    return Object.assign({}, state, {
      detail: undefined
    });
  }

  return state;
};

export default search;
