import MainHeader from "./MainHeader";
import TestFooter from "./TestFooter";
import '../style/index.css'

/** Contains the page container, main header and footer */
const PageWrapper = ({ children }) => {
  
  return (
    <div className="page-container">
      <MainHeader />
      {children}
      <TestFooter />
    </div>
  );
};

export default PageWrapper;
