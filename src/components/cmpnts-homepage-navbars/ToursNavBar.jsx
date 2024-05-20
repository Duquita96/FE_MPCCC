import { NavLink } from 'react-router-dom';
import '../../style/headerStyle.css'
import { PiParkDuotone } from "react-icons/pi";
import { MdHiking } from "react-icons/md";
import { MdOutlineMuseum } from "react-icons/md";
import { ToursTypeContext } from '../../context/TypesContext.jsx';
import { useContext } from 'react';


const ServicesNavBar = () => {
    const { setTourType } = useContext(ToursTypeContext);


    return (
        <nav className="sub-headers headers">
            <p className='navbarTitle'>Tours </p>
            <NavLink to={'/filter-page/tours'} className="nav-item" onClick={() => setTourType('sightseeing')}

                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <PiParkDuotone size={27} />
            </NavLink>

            <NavLink to={'/filter-page/tours'} className="nav-item" onClick={() => setTourType('hiking')}
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <MdHiking size={27} />
            </NavLink>

            <NavLink to={'/filter-page/tours'} className="nav-item" onClick={() => setTourType('museum')}
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <MdOutlineMuseum size={27} />
            </NavLink>
        </nav>
    )
}

export default ServicesNavBar;