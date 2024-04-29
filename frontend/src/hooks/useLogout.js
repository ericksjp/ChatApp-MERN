import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);

  async function logout() {
    setLoading(true);
    try {
      await axios.post("api/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("chat-user");
      setAuthUser(null);
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
