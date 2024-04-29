import { useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);

  async function signup(data) {
    const localResult = handleInputErrors(data);

    if (!localResult) return;

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", {
        fullName: data.fullName,
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword,
        gender: data.gender,
      });

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setAuthUser(res.data);
      toast.success("Signup successful");
    } catch (error) {
      if (error.response?.data?.message)
        toast.error(error.response.data.message);
      else toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, signup };
}

function handleInputErrors(data) {
  if (data.fullName.trim().length === 0) {
    toast.error("Fullname is required");
    return false;
  }
  if (data.username.trim().length === 0) {
    toast.error("Username is required");
    return false;
  }
  if (data.password.trim().length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (data.gender !== "male" && data.gender !== "female") {
    toast.error("Gender is required");
    return false;
  }

  return true;
}
