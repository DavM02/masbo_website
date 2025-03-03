
import { createContext, useState } from "react";

const MainContext = createContext();

export default function MainContextProvider({ children }) {

  const [ triggerInit, setTriggerInit ] = useState(false)
  
  return (
    <MainContext.Provider
      value={{triggerInit, setTriggerInit}}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };