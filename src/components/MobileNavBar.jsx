import '../style/headerStyle.css'

const ServicesNavBar = ({toggleDisplay}) => {
    return (
        <div className="sub-headers headers" style={{justifyContent: "space-around"}}>
            <p>Logo</p>
            <div className="nav-item-mobile">user</div>
            <div className="nav-item-mobile">cart</div>
            <div className="nav-item-mobile" onClick={toggleDisplay}>login</div>
        </div>
    )
}

export default ServicesNavBar;