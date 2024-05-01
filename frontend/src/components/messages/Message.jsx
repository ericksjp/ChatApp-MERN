import getHourMinute from "../../utils/dateFormatter";
import useAuth from "../../zustand/useAuth";
import useConversation from "../../zustand/useConversation";

export default function Message({ message }) {
  const { auth } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === auth._id;
  const className = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? auth.profilePic
    : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-blue-500" : "";
  const hour = getHourMinute(message.createdAt);

  return (
    <div className={`chat ${className} ${message.shake ? "shake" : ""}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="chat component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble max-w-[370px] ${bgColor}`}>
        <p className="text break-words text-white">{message.message}</p>
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {hour}
      </div>
    </div>
  );
}
