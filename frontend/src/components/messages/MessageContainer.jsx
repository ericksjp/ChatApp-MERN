import { useContext, useEffect } from "react";
import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { SelectedContext } from "../../context/SelectedContext";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } =
    useContext(SelectedContext);
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
