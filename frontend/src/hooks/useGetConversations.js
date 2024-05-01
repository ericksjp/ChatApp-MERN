import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useGetConversations() {
  const [test, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getConversations() {
      try {
        const resp = await axios.get("/api/users?excludeSelf");
        setConversations(resp.data);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    getConversations();
  }, []);

  return { loading, test };
}
