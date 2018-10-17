const initialState = {
  results: []
};

const search = (state = initialState, action) => {
  if (action.type === "RESULTS") {
    return Object.assign({}, state, {
      results: action.results
    });
  }

  return state;
};

export default search;
