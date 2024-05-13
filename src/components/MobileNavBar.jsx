import { useContext } from 'react';
import '../style/headerStyle.css'
import HeaderContext from '../context/HeaderContext';
import AccountBtn from '../components/cmpnts-header-buttons/AccountBtn'
import CartBtn from '../components/cmpnts-header-buttons/CartBtn'
import LoginLogoutBtn from '../components/cmpnts-header-buttons/LoginLogoutBtn'


const MobileNavBar = () => {

    const {toggleLogin,toggleCart} = useContext(HeaderContext)

    return (
        <div className="sub-headers headers" style={{justifyContent: "space-around"}}>
            <p>Logo</p>
            <AccountBtn />
            <CartBtn />
            <LoginLogoutBtn />
        </div>
    )
}

export default MobileNavBar;