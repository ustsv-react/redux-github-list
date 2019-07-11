import axios from "axios";

const getAllStart = () => {
  return {
    type: "GET_ALL_START"
  };
};

const getAllSuccess = (response) => {
  return {
    type: "GET_ALL_SUCCESS",
    data: response
  };
};

const getAllError = (err) => {
  return {
    type: "GET_ALL_ERROR",
    err
  };
};

const getDetailStart = () => {
  return {
    type: "GET_DETAIL_START"
  };
};

const getDetailSuccess = (response) => {
  return {
    type: "GET_DETAIL_SUCCESS",
    data: response
  };
};

const getDetailError = (err) => {
  return {
    type: "GET_DETAIL_ERROR",
    err
  };
};

export const getAllUsers = () => {
  return (dispatch) => {
    dispatch(getAllStart());
    axios.get("https://api.github.com/users?per_page=100")
      .then(res => {
        // console.log(res);
        dispatch(getAllSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAllError(err));
      });
  };
}


export const getUserDetails = (id) => {
  return (dispatch) => {
    dispatch(getDetailStart());
    axios.get(`https://api.github.com/users/${id}`)
      .then(res => {
        // console.log(res);
        dispatch(getDetailSuccess(res.data));
      })
      .catch(err => {
        dispatch(getDetailError(err));
      });
  }; 
};