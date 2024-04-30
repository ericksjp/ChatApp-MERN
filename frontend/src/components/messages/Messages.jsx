import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

export default function Messages() {
  const { loading, messages } = useGetMessages();

  return (
    <div className="px-3 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message message={message} key={message._id} />
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
