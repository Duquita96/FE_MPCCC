import MainHeader from "./MainHeader";
import Footer from "./Footer";
import '../style/index.css'

/** Contains the page container, main header and footer */
const PageWrapper = ({ children }) => {
  
  return (
    <div className="page-container">
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
