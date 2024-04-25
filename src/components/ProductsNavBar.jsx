import { NavLink } from 'react-router-dom';
import '../style/headerStyle.css'

const ProductsNavBar = () => {
    return (
        <nav className="sub-headers headers">
            <p>Products</p>
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
        </nav>
    )
}

export default ProductsNavBar;