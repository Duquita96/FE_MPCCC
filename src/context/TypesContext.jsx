import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

ToursTypeContextProvider.propTypes = {
    children: PropTypes.object,
  };