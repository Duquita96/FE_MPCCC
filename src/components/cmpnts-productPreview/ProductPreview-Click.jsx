// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

// export const ProductPreviewClick = ({ id, children, productType }) => {
//   const handleCardClick = () => {
//     console.log(`Element ${productType} with ID ${id} was clicked.`);
//   };

// /* cambiar el no case sensitive de productType */

//   let route;
//   if (productType === 'book' || productType === 'BOOK') {
//     route = `/book/${id}`;

//   } else if (productType === 'tours' || productType === 'TOURS') {
//     route = `/tour/${id}`;
//   }else if (productType === 'pc_parts') {
//     route = `/pc-parts/${id}`;
//   }/* else if (productType === 'video-games' || productType === 'VIDEO_GAMES') {
//     route = `/video-games/${id}`;
//   } */

//   return (
//     <div onClick={handleCardClick}>
//       <NavLink to={route}>
//         {children}
//       </NavLink>
//     </div>
//   );
// };

// ProductPreviewClick.propTypes = {
//   id: PropTypes.string,
//   title: PropTypes.string,
//   children: PropTypes.node,
//   productType: PropTypes.string,
// };

// export default ProductPreviewClick;

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductPreviewClick = ({ id, children, productType }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    let route;
    //Esto debería ser "books", como está en la DB. Pero como GET books tiene un bug, siempre viene "BOOK"
    if (productType === 'book' || productType === 'BOOK') {
      route = `/book/${id}`;
    //Esto debería ser "tours", como está en la DB. Funciona bien
    } else if (productType === 'tours' || productType === 'TOURS') {
      route = `/tour/${id}`;
      //Esto debería ser "pc_parts", como está en la DB. Pero como GET pc_parts tiene un bug, siempre viene "PC_PART"
    } else if (productType === 'pc_part' || productType === 'PC_PART') {
      console.log('en el if de ProductType al clickear: ', productType);
      route = `/pc-parts/${id}`;
    }
    else if (productType === 'video_game' || productType === 'VIDEO_GAME') {
      console.log('en el if de ProductType al clickear: ', productType);
      route = `/video-games/${id}`;
    }
    console.log(`Element ${productType} with ID ${id} was clicked.`, "route: ", route);
    navigate(route); // Navega al route correspondiente
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
