import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  async function sendMessage(message) {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        {
          message,
        },
      );

      setMessages([...messages, res.data]);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, sendMessage };
}
