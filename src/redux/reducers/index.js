import { combineReducers } from "redux";
import userList from "./userList";
import userDetails from "./userDetails";

const reducer = combineReducers({
  userList,
  userDetails
});

export default reducer;
