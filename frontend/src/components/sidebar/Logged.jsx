import { useState } from "react";
import useAuth from "../../zustand/useAuth";

export default function Logged({ style }) {
  const [imageLoad, setImageLoad] = useState(false);
  const { auth } = useAuth();
  return (
    <div className={`flex items-center gap-2 w-fit ${style}`}>
      <img
        src={auth.profilePic}
        alt="user picture"
        onLoad={() => setImageLoad(true)}
        className="w-8 rounded-full border-2 border-green-500"
        style={{ display: imageLoad ? "block" : "none" }}
      />
      {!imageLoad && <span className="loading loading-spinner mt-1 ml-2" />}
      <h3 className="font-bold text-gray-200">{auth.fullName}</h3>
    </div>
  );
}
