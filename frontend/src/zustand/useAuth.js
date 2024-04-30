/* eslint-disable react/prop-types */
import { create } from "zustand";

const useAuth = create((set) => ({
  auth: JSON.parse(localStorage.getItem("chat-user")) || null,
  setAuth: (auth) => {
    localStorage.setItem("chat-user", JSON.stringify(auth));
    set({ auth });
  },
  deleteAuth: () => {
    localStorage.removeItem("chat-user");
    set({ auth: null });
  },
}));

export default useAuth;
