import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children, productType }) => {
  const handleCardClick = () => {
    console.log(`Element with ID ${id} was clicked.`);
  };

/* cambiar el no case sensitive de productType */

  let route;
  if (productType === 'book' || productType === 'BOOK') {
    route = `/book/${id}`;

  } else if (productType === 'tours' || productType === 'TOURS') {
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
