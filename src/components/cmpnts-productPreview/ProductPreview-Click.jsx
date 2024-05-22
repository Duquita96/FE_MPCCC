import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children, productType }) => {
  const navigate = useNavigate();


let lowerProductType= productType.toLowerCase();
/* console.log("lowerProductType: ", lowerProductType, "productType:", productType) */


  
  const handleCardClick = () => {
    let route;



    if (lowerProductType === 'books') {
      route = `/books/${id}`;
    } else if (lowerProductType === 'tours') {
      route = `/tours/${id}`;
    } else if (lowerProductType === 'pc_parts') {
      route = `/pc-parts/${id}`;
    } else if (lowerProductType === 'video_games') {
      route = `/video-games/${id}`;
    }
    console.log(`Element ${lowerProductType} with ID ${id} was clicked.`, "route: ", route);
    navigate(route);
  };

  return (
    <div onClick={handleCardClick}>
      {children}
    </div>
  );
};

ProductPreviewClick.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  productType: PropTypes.string.isRequired,
};

export default ProductPreviewClick;
