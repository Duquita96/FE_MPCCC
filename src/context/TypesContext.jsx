import { createContext, useState } from 'react';

export const ToursTypeContext = createContext();

export const ToursTypeContextProvider = ({ children }) => {
    const [tourType, setTourType] = useState();

    return (
        <ToursTypeContext.Provider value={{ tourType, setTourType }}>
            {children}
        </ToursTypeContext.Provider>
    );
};

export default ToursTypeContextProvider;