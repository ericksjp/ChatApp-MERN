import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import useSocketContext from "./useSocketContext";

export default function useListeningMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
}
