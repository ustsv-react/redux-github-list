const initState = {
  isLoading: false,
  details: {},
  error: null
};

const userDetails = (state = initState, action) => {
  switch(action.type) {
    case "GET_DETAIL_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_DETAIL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        details: action.data,
        error: null
      };
    case "GET_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.err
      };
    default:
      return state;
  }
}

export default userDetails;
