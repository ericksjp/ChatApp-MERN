// import { useState } from "react";
// import useSelectedConversation from "../../hooks/useSelectedConversation";
import useConversation from "../../zustand/useConversation";

/* eslint-disable react/prop-types */
export default function Conversation({ conversation, emoji, last }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-600 p-2 py-1 cursor-pointer rounded ${isSelected ? "bg-sky-600" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user picture"
              // onLoad={() => setImageLoad(true)}
              // style={{ display: imageLoad ? "block" : "none" }}
            />
            {/* {!imageLoad && ( */}
            {/*   <span className="loading loading-spinner mt-2 ml-2" /> */}
            {/* )} */}
          </div>
        </div>
        <div className="flex w-full gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
      {!last && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}
