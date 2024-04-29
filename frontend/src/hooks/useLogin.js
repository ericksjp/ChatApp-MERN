import { useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);

  async function login(data) {
    setLoading(true);
    const localResult = handleInputErrors(data);
    if (!localResult) return;

    try {
      const resp = await axios.post("http://localhost:3000/api/auth/login", {
        username: data.username,
        password: data.password,
      });

      localStorage.setItem("chat-user", JSON.stringify(resp.data));
      setAuthUser(resp.data);
      toast.success("Login successful");
    } catch (error) {
      if (error.response?.data?.message)
        toast.error(error.response.data.message);
      else toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return { loading, login };
}

function handleInputErrors(data) {
  if (data.username.trim() === "") {
    toast.error("Username is required");
    return false;
  }
  if (data.password.trim() === "") {
    toast.error("Password is required");
    return false;
  }

  return true;
}
