import { useEffect } from "react";
import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Header fullName={selectedConversation.fullName} />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
