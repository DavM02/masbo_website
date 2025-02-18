import {  useRef } from "preact/hooks";
import { createContext } from "preact";

const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const scrollbarAccess = useRef(null);
  const scrollTweenAccess = useRef(null)
 

  return (
    <MainContext.Provider
      value={{ scrollbarAccess, scrollTweenAccess }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };
