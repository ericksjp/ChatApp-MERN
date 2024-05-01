import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import useSocketContext from "./useSocketContext";

import notification from "../assets/sounds/notification.mp3";

export default function useListeningMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      message.shake = true;
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, message]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
}
