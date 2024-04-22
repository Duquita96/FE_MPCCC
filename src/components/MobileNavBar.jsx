import '../style/headerStyle.css'

const ServicesNavBar = ({toggleFunctions}) => {

    const {toggleLogin, toggleCart} = toggleFunctions;

    return (
        <div className="sub-headers headers" style={{justifyContent: "space-around"}}>
            <p>Logo</p>
            <div className="nav-item-mobile">user</div>
            <div className="nav-item-mobile" onClick={toggleCart}>cart</div>
            <div className="nav-item-mobile" onClick={toggleLogin}>login</div>
        </div>
    )
}

export default ServicesNavBar;