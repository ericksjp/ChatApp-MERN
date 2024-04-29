import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../zustand/useAuth";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();

  async function logout() {
    setLoading(true);
    try {
      await axios.post("api/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("chat-user");
      setAuth(null);
      toast.success("Logout successful");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, logout };
}
