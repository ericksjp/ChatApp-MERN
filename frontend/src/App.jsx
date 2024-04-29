import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import useAuth from "./zustand/useAuth";

export default function App() {
  const { auth } = useAuth();
  return (
    <div className="p-4 h-screen flex items-center justify-items-center">
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={auth ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}
