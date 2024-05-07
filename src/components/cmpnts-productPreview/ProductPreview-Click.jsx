import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children, productType }) => {
  const handleCardClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Element with ID ${id} was clicked.`);
  };


  let route;
  if (productType === 'book') {
    route = `/book/${id}`;
  } else if (productType === 'tour') {
    route = `/tour/${id}`;
  }

  return (
    <div onClick={handleCardClick}>
      <NavLink to={route}>
        {children}
      </NavLink>
    </div>
  );
};

ProductPreviewClick.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  productType: PropTypes.string,
};

export default ProductPreviewClick;
