import { Button, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import styleClass from "./SigninForm.module.css";
import { useNavigate } from "react-router-dom";

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

function SignupForm(props) {
  const handleEmailState = (e) => {
    props.setEmail(e.target.value);
  };
  const handlePasswordState = (e) => {
    props.setPassword(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className={styleClass.h1}>
        <h1>Sign up.</h1>
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/", {
            state: {
              email: props.email,
              password: props.password,
            },
          });
        }}
      >
        <div>
          <input
            placeholder="Email"
            name="email"
            className={styleClass.inputStyle}
            onChange={handleEmailState}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={styleClass.inputStyle}
            onChange={handlePasswordState}
          />
        </div>
        <div>
          <Button
            type="submit"
            size="small"
            variant="outlined"
            sx={{
              ...buttonStyling,
              marginLeft: "580px",
              marginTop: "30px",
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
          >
            Sign up
          </Button>
        </div>
      </form>
      <div>
        <p className={styleClass.p2}>
          <b>Forgot password?</b>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
