import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const {authUser} = useContext(AuthContext);
  return (
    <div className="p-4 h-screen flex items-center justify-items-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" /> } />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}
