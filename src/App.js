import "./App.css";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

export const detailContext = React.createContext(null);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <detailContext.Provider
              value={{ email: email, password: password }}
            >
              <SigninForm />
            </detailContext.Provider>
          }
        />
        <Route
          path="/signup"
          element={
            <SignupForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
