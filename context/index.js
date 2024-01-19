/* eslint-disable react/display-name */
import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  userName: "",
  secret: "",
  setUserName: () => {},
  setSecret: () => {},
});

export const ContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [secret, setSecret] = useState("");

  const ctxValues = {
    userName,
    secret,
    setUserName,
    setSecret,
  };

  return (
    <AuthContext.Provider value={ctxValues}>{children}</AuthContext.Provider>
  );
};
