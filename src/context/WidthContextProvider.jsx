import { useState } from 'react'
import WidthContext from "./WidthContext";

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
