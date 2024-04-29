import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

export default function Conversations() {
  let { loading, test } = useGetConversations();

  return (
    <div className="py-1 flex flex-col overflow-auto border-y border-dashed border-slate-600 w-full">
      {loading ? (
        <span className="loading loading-spinner mx-auto" />
      ) : (
        <>
          {test.map((conversation, index) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={"🤖"}
              last={index === test.length - 1}
            />
          ))}
        </>
      )}
    </div>
  );
}
