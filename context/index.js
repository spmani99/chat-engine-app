/* eslint-disable react/display-name */
import React, { createContext, useState } from "react";

export const Context = createContext({
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

  return <Context.Provider value={ctxValues}>{children}</Context.Provider>;
};
