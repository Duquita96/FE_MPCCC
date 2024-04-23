import PropTypes from 'prop-types';

export const ProductPreviewClick = ({ id, children }) => {
  const handleCardClick = () => {
    console.log(`Element with ID ${id} was clicked.`);
    const url = window.location.href + 'productId';
    /* window.location.href take the current localhost, and as by default end in a / , the concatenation path needs to be without the / */
    window.open(url, '_blank')
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
};