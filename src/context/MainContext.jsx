import { useRef } from "preact/hooks";
import { createContext } from "preact";
const MainContext = createContext();

export default function MainContextProvider({ children }) {

 
  const openTl = useRef(null);
  const closeTl = useRef(null);
  
  return (
    <MainContext.Provider
      value={{ openTl, closeTl
        
      }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };