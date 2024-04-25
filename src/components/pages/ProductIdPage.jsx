import { NavLink, useParams } from 'react-router-dom';
import { booksData } from '../data/book.js';
import { toursData } from '../data/service.js';

export const ProductIdPage = () => {
    const { id } = useParams();

    const product = booksData.data.find((item) => item._id === id);
    const service = toursData.data.find((item) => item._id === id);

    const renderProductDetails = (product) => (
        <div>
            <img src={`../src/assets/img/${product.imgSrc}`} alt={"productImage"} />
            <p><strong>Title</strong>: {product.title}</p>
            <p><strong>Author</strong>: {product.author}</p>
            <p><strong>Genre</strong>: {product.genre}</p>
            <p><strong>Price</strong>: {product.price}</p>
            <p><strong>Pages</strong>: {product.pages}</p>
            <p><strong>Description</strong>: {product.description}</p>
        </div>
    );

    const renderServiceDetails = (service) => (
        <div>
            <p><strong>Price</strong>: {service.price}</p>
        </div>
    );

    return (
        <div>
            <button>
                <NavLink to={`/`}>Return</NavLink>
            </button>
            {product ? renderProductDetails(product) : service ? renderServiceDetails(service) : <div>insert 404</div>}
        </div>
    );
};

export default ProductIdPage;

