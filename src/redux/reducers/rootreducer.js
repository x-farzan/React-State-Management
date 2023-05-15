import { combineReducers } from "redux";

import emailReducer from "../reducers/emailReducer";

// here we will combine all kind of reducer

export default combineReducers({
  emailReducer,
});
