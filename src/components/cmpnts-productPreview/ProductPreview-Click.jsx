import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children, productType }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    let route = `/${productType}/${id}`;
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
