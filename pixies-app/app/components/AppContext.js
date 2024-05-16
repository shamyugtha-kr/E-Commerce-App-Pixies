import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <AppContext.Provider
      value={{ userName, setUserName, userEmail, setUserEmail }}
    >
      {children}
    </AppContext.Provider>
  );
};
