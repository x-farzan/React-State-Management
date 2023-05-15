import { Button } from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import styleClass from "./SigninForm.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { detailContext } from "../App";

const buttonStyling = {
  position: "absolute",
  color: "black",
  border: "3px solid",
  borderRadius: 3,
  borderColor: "gray",
  "&:hover": {
    border: "3px solid",
    borderRadius: 3,
    borderColor: "gray",
  },
  paddingRight: "4%",
  paddingLeft: "4%",
};

function SigninForm(props) {
  /**
   * For getting states passed in routing
   */
  // const states = useLocation();

  /**
   * For getting values passed in context
   */
  // const detailCOntextVal = React.useContext(detailContext);

  /**
   * For redux
   */
  const { emailReducer } = useSelector((states) => states);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = () => {
    /**
     * For getting states passed in routing
     */
    // if (email === states.state.email && password === states.state.password) {
    /**
     * For getting values passed in context
     */
    // if (
    //   email === detailCOntextVal.email &&
    //   password === detailCOntextVal.password
    // ) {
    //   alert("Logged in successfully!");
    // } else {
    //   alert("invalid credentials!");
    // }
    /**
     * For redux
     */
    if (email == emailReducer.email && password == emailReducer.password) {
      alert("Logged in successfully!");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <div className={styleClass.h1}>
        <h1>Sign in.</h1>
      </div>
      <div>
        <Button
          size="small"
          variant="outlined"
          sx={{
            ...buttonStyling,
            marginLeft: "485px",
            marginTop: "25px",
            textTransform: "capitalize",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <GoogleIcon sx={{ paddingRight: "5px" }} />
          Continue with Google
        </Button>
      </div>
      <div>
        <Button
          size="small"
          variant="outlined"
          sx={{
            ...buttonStyling,
            marginLeft: "484px",
            marginTop: "70px",
            textTransform: "capitalize",
            paddingLeft: 9,
            paddingRight: 9.5,
          }}
        >
          <FacebookIcon sx={{ paddingRight: "5px" }} />
          Continue with Facebook
        </Button>
      </div>
      <div>
        <p className={styleClass.p}>or</p>
      </div>
      <form>
        <div>
          <input
            placeholder="Email"
            name="email"
            className={styleClass.inputStyle}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={styleClass.inputStyle}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <Button
            size="small"
            variant="outlined"
            sx={{
              ...buttonStyling,
              marginLeft: "580px",
              marginTop: "20px",
              borderRadius: "none",
              border: "none",
              backgroundColor: "#ff1493",
              textTransform: "capitalize",
              "&:hover": {
                border: "none",
                borderRadius: "none",
                backgroundColor: "#ff1493",
              },
            }}
            onClick={checkCredentials}
          >
            Sign in
          </Button>
        </div>
      </form>
      <div>
        <p className={styleClass.p1}>
          Don't have and account?{" "}
          <b>
            <Link to="/signup">Create Account</Link>
          </b>
        </p>
      </div>
      <div>
        <p className={styleClass.p2}>
          <b>Forgot password?</b>
        </p>
      </div>
    </div>
  );
}

export default SigninForm;
