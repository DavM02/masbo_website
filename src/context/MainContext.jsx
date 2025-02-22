
import { createContext } from "preact";

const MainContext = createContext();

export default function MainContextProvider({ children }) {


  return (
    <MainContext.Provider>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext };
