/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SelectedContext = createContext();

export function SelectedContextProvider({ children }) {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <SelectedContext.Provider
      value={{ selectedConversation, setSelectedConversation }}
    >
      {children}
    </SelectedContext.Provider>
  );
}
