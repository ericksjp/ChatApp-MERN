/* eslint-disable react/prop-types */
import { create } from "zustand";

const useAuth = create((set) => ({
  auth: JSON.parse(localStorage.getItem("chat-user")),
  setAuth: (auth) => {
    set({ auth });
  },
}));

export default useAuth;
