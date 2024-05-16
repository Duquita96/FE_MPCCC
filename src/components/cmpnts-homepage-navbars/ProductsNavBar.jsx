import { NavLink } from 'react-router-dom';
import '../../style/headerStyle.css'
import { CgGames } from "react-icons/cg"
import { GiBookshelf, GiComputerFan } from "react-icons/gi";

const ProductsNavBar = () => {
    return (
        <nav className="sub-headers headers">
            <p className='navbarTitle'>Products</p>
            <NavLink to={'/'} className="nav-item"
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <CgGames size={27} />
            </NavLink>

            <NavLink to={'/'} className="nav-item"
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <GiBookshelf size={27} />
            </NavLink>

            <NavLink to={'/'} className="nav-item"
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <GiComputerFan size={27} />
            </NavLink>

            {/* <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" /> */}
        </nav>
    )
}

export default ProductsNavBar;