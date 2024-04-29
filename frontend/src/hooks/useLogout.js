import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);

  async function logout() {
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {loading, logout};
}
