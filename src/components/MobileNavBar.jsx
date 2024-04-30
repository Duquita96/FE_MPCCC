import { useContext } from 'react';
import '../style/headerStyle.css'
import HeaderContext from '../context/HeaderContext';

const MobileNavBar = () => {

    const {toggleLogin,toggleCart} = useContext(HeaderContext)

    return (
        <div className="sub-headers headers" style={{justifyContent: "space-around"}}>
            <p>Logo</p>
            <div className="nav-item-mobile">user</div>
            <div className="nav-item-mobile" onClick={toggleCart} >cart</div>
            <div className="nav-item-mobile" onClick={toggleLogin} >login</div>
        </div>
    )
}

export default MobileNavBar;