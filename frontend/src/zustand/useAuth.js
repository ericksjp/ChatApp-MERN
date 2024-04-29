/* eslint-disable react/prop-types */
import { create } from "zustand";

const useAuth = create((set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
}));

export default useAuth;
