import { useState } from "react";
import { BsSend } from "react-icons/bs";

export default function MessageInput() {
  const [isFocused, setIsFocused] = useState(false);

  console.log(isFocused);

  return (
    <form
      className={`w-full bg-gray-700 flex flex-row items-center border-t border-collapse border-gray-${isFocused ? "300" : "600"}`}
    >
      <input
        type="text"
        className="outline-none text-sm rounded-lg block w-full p-2.5 bg-transparent border-none text-white hover:border-none"
        placeholder="Send a message"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type="submit" className="btn btn-outline btn-circle btn-sm mr-2">
        <BsSend className="text-white" />
      </button>
    </form>
  );
}
