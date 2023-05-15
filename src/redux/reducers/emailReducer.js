import { SIGNUP, PASSWORD } from "../actions/types";

const initialState = {
  email: "",
  password: "",
};

const emailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        ...payload,
      };

    // case PASSWORD:
    //   return {
    //     ...state,
    //     ...payload,
    //   };

    default:
      return state;
  }
};

export default emailReducer;
