import React from "react";
import { createContext, useState } from "react";

export const ContextWrap = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState();
  const [btnValue, setBtnValue] = useState(false);
  return (
    <ContextWrap.Provider value={[data, setData, btnValue, setBtnValue]}>
      {children}
    </ContextWrap.Provider>
  );
};

export default Context;
