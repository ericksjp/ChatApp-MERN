import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    async function getMessages() {
      setLoading(true);
      if (!selectedConversation._id) return;

      try {
        const resp = await axios.get(
          `/api/messages/${selectedConversation._id}`,
        );
        setMessages(resp.data);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (selectedConversation) getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
}
