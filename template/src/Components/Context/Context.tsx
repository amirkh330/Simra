import React, { createContext, useContext } from "react";
import values from "./values";


const Context = createContext(values);

export const Themes = () => useContext(Context);

export default function StageManeger({ children}:any) {
  


  return (
    <>
      <Context.Provider value={values}>{children}</Context.Provider>
    </>
  );
}
