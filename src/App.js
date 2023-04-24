import "./App.css";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
