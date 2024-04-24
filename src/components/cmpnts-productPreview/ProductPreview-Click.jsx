import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children }) => {
  const handleCardClick = (event) => {
    event.preventDefault();
    console.log(`Element with ID ${id} was clicked.`);
  };

  return (
    <div onClick={handleCardClick}>
      <NavLink to={`/productId`}>
        {children}
      </NavLink>
    </div>
  );
};


ProductPreviewClick.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};