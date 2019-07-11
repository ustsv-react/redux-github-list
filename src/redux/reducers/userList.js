const initState = {
  isLoading: false,
  list: [],
  error: null
};

const userList = (state = initState, action) => {
  switch(action.type) {
    case "GET_ALL_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_ALL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        list: action.data,
        error: null
      };
    case "GET_ALL_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.err
      };
    default:
      return state;
  }
};

export default userList;
