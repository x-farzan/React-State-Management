import "./App.css";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninForm />} />
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
