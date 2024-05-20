import { Link } from "react-router-dom";
import { CgGames } from "react-icons/cg";
import { PiParkDuotone } from "react-icons/pi";
import { GiBookshelf, GiComputerFan } from "react-icons/gi";
import { MdOutlineMuseum, MdHiking } from "react-icons/md";
import "../../style/headerStyle.css";

const ProductsNavBar = () => {
  return (
    <nav className="navbar headers">
      <Link to={"/filter-page/video_game"} className="nav-item">
        <CgGames size={27} />
      </Link>
      <Link to={"/filter-page/book"} className="nav-item">
        <GiBookshelf size={27} />
      </Link>
      <Link to={"/filter-page/pc_part"} className="nav-item">
        <GiComputerFan size={27} />
      </Link>
      <Link to={"/filter-page/tours"} className="nav-item">
        <PiParkDuotone size={27} />
      </Link>
      <Link to={"/filter-page/tours"} className="nav-item">
        <MdHiking size={27} />
      </Link>
      <Link to={"/filter-page/tours"} className="nav-item">
        <MdOutlineMuseum size={27} />
      </Link>
    </nav>
  );
};

export default ProductsNavBar;
