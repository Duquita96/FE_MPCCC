import { Link } from "react-router-dom";
import { CgGames } from "react-icons/cg";
import { PiParkDuotone } from "react-icons/pi";
import { GiBookshelf, GiComputerFan } from "react-icons/gi";
import { MdOutlineMuseum, MdHiking } from "react-icons/md";
import { ToursTypeContext } from '../../context/TypesContext.jsx';
import { useContext } from 'react';
import "../../style/headerStyle.css";

const ProductsNavBar = () => {
  const { setTourType } = useContext(ToursTypeContext);
  return (
    <nav className="navbar headers">
      <Link to={"/filter-page/video-games"} className="nav-item">
        <CgGames size={27} />
      </Link>
      <Link to={"/filter-page/books"} className="nav-item">
        <GiBookshelf size={27} />
      </Link>
      <Link to={"/filter-page/pc-parts"} className="nav-item">
        <GiComputerFan size={27} />
      </Link>
      <Link to={"/filter-page/tours"} className="nav-item" onClick={() => setTourType('sightseeing')}>
        <PiParkDuotone size={27} />
      </Link>
      <Link to={"/filter-page/tours"} className="nav-item" onClick={() => setTourType('hiking')}>
        <MdHiking size={27} />
      </Link>
      <Link to={"/filter-page/tours"} className="nav-item" onClick={() => setTourType('museum')}>
        <MdOutlineMuseum size={27} />
      </Link>
    </nav>
  );
};

export default ProductsNavBar;
