import "../../style/NotFoundPage/NotFound.css";
import { FaRegSadCry } from "react-icons/fa";
import "../../style/index.css";

const NotFound = () => {
    return (
        <section className="NotFoundPage">
            <div className="notFoundTextBox">
                <h2 className="h2notFoundPage">The page you requested was not found</h2><FaRegSadCry size="20px"/>
                <br></br>
                <button>Return Button</button>
            </div>
        </section>
    )
};

export default NotFound;