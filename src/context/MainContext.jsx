import {  useRef } from "preact/hooks";
import { createContext } from "preact";

const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const scrollbarAccess = useRef(null);

 

  return (
    <MainContext.Provider
      value={{ scrollbarAccess }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };
