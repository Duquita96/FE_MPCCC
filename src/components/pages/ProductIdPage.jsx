// ProductDetailsPage.jsx
import { NavLink, useParams } from 'react-router-dom';
import { booksData } from '../data/book.js';

export const ProductIdPage = () => {
    const { id } = useParams();

    const product = booksData.data.find((item) => item._id === id);
    console.log(product);


    if (!product) {
        return <div>insert 404</div>;
    }

    // Render product details here
    return (
        <div>
            <button>
                <NavLink to={`/`}>Return</NavLink>
            </button>
            <div>
                <img src={`../src/assets/img/${product.imgSrc}`} alt={product.title + "productImage"} />
                <p><strong>Title</strong>: {product.title}</p> 
                <p><strong>Author</strong>: {product.author}</p> 
                <p><strong>Genre</strong>: {product.genre}</p> 
                <p><strong>Price</strong>: {product.price}</p> 
                <p><strong>Pages</strong>: {product.pages}</p> 
                <p><strong>Description</strong>: {product.description}</p> 

            </div>

        </div>
    );
};

export default ProductIdPage;
