const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "SETEMAIL":
      state = action.payload.value;
      break;
    default:
      state = "";
  }
};

export default emailReducer;
