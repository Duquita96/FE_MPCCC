import AccountBtn from '../cmpnts-header-buttons/AccountBtn'
import CartBtn from '../cmpnts-header-buttons/CartBtn'
import LoginLogoutBtn from '../cmpnts-header-buttons/LoginLogoutBtn'
import '../../style/headerStyle.css'


const MobileNavBar = () => {

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