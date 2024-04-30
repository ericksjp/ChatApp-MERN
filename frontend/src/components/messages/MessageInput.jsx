import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { loading, sendMessage } = useSendMessage();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form
      className={`w-full bg-gray-700 flex flex-row items-center rounded-br-lg border-collapse border-gray-${isFocused ? "300" : "600"}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none text-sm rounded-lg block w-full p-2.5 bg-transparent border-none text-white hover:border-none"
        placeholder="Send a message"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-outline btn-circle btn-sm mr-2"
        disabled={loading}
      >
        {loading ? (
          <span className="spinner loading-spinner" />
        ) : (
          <BsSend className="text-white" />
        )}
      </button>
    </form>
  );
}
