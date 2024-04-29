import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
