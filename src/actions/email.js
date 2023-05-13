const setEmail = (val) => {
  return {
    type: "SETEMAIL",
    payload: {
      value: val,
    },
  };
};

export default setEmail;
