import { createContext, useState } from 'react';

export const WidthContext = createContext();

/** Provides the current width of the window to the entire app */
const WidthContextProvider = ({ children }) => {

  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const handleResize = () => {setWindowWith(window.innerWidth)};
  window.addEventListener("resize", handleResize);

  return (
    <WidthContext.Provider value={{windowWidth}}>
        {children}
    </WidthContext.Provider>
    )
};

export default WidthContextProvider;
