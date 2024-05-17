import { NavLink } from 'react-router-dom';
import '../../style/headerStyle.css'
import { PiParkDuotone } from "react-icons/pi";
import { MdHiking } from "react-icons/md";
import { MdOutlineMuseum } from "react-icons/md";


const ServicesNavBar = () => {
    return (
        <nav className="sub-headers headers">
            <p className='navbarTitle'>Tours </p>
                        <NavLink to={'/filter-page/tours'} className="nav-item"
   
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <PiParkDuotone size={27} />
            </NavLink>

            <NavLink to={'/filter-page/tours'} className="nav-item"
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <MdHiking size={27} />
            </NavLink>

            <NavLink to={'/filter-page/tours'} className="nav-item"
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