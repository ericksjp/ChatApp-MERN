import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useListeningMessages from "../../hooks/useListeningMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

export default function Messages() {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useListeningMessages();

  useEffect(() => {
    if (!loading && lastMessageRef.current)
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="px-3 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {loading && (
        <div className="mt-3">
          {[...Array(3)].map((_, index) => (
            <MessageSkeleton key={index} />
          ))}
        </div>
      )}

      {!loading && messages.length === 0 && (
        <p className="text-center text-slate-200 mt-3">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}
