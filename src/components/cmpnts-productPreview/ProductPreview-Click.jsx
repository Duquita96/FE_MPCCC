// ProductPreviewClick.jsx
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children, productType }) => {
  const handleCardClick = (event) => {
    event.preventDefault();
    console.log(`Element with ID ${id} was clicked.`);
    console.log("Route: ", route);  };

  let route;
  if (productType === 'book') {
    //console.log("productType in ProductPreview-Click", productType)
    route = `/book/${id}`;
  } else if (productType === 'tour') {
    //console.log("productType in ProductPreview-Click", productType)
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
  productType: PropTypes.string, // Añade esta línea
};

export default ProductPreviewClick;
