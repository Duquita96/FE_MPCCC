import { NavLink } from 'react-router-dom';
import '../../style/headerStyle.css'
import { CgGames } from "react-icons/cg"
import { GiBookshelf, GiComputerFan } from "react-icons/gi";

const ProductsNavBar = () => {
    return (
        <nav className="sub-headers headers">
            <p className='navbarTitle'>Products</p>
            <NavLink to={'/filter-page/video_game'} className="nav-item"
      
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
                
            >
                <CgGames size={27} />
            </NavLink>

            <NavLink to={'/filter-page/book'} className="nav-item"
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <GiBookshelf size={27} />
            </NavLink>

            <NavLink to={'/filter-page/pc_part'} className="nav-item"
                style={() => {
                    return {
                        fontWeight: "bold",
                        color: "white",
                    };
                }}
            >
                <GiComputerFan size={27} />
            </NavLink>
        </nav>
    )
}

export default ProductsNavBar;