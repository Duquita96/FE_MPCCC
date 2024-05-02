import { NavLink } from 'react-router-dom';
import '../style/headerStyle.css'

const ServicesNavBar = () => {
    return (
        <nav className="sub-headers headers">
            <p className='navbarTitle'>Tours </p>
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
            <NavLink to={'/'} className="nav-item" />
        </nav>
    )
}

export default ServicesNavBar;