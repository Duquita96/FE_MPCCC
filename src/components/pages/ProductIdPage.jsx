import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import MainHeader from '../MainHeader.jsx';
import Footer from '../Footer.jsx';
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';
import { getImgPath } from '../cmpnts-productPreview/Card.jsx';
import '../../style/productIdPage.css'

export const ProductIdPage = ({ productType }) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [tour, setTour] = useState(null);
    const [imgPath, setImgPath] = useState(null);


    const { showLogin, showCart } = useContext(HeaderContext)
    const { windowWidth } = useContext(WidthContext)

    useEffect(() => {
        console.log("Book:", book)
        console.log("Tour:", tour)


        if (productType === 'book') {
            fetch(`http://localhost:8000/api/v1/books/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setBook(data.data);
                    setImgPath(getImgPath(data.data));
                })
                .catch(err => console.log(err))
        } else {
            fetch(`http://localhost:8000/api/v1/tours/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTour(data.data);
                    setImgPath(getImgPath(data.data));
                })
                .catch(err => console.log(err))
        }
    }, [id]);


    const renderProductDetails = (book) => (
        <div id="product_section">
            <div id='imgcontainer'>
                <img src={imgPath} alt={"productImage"} />
            </div>

            <div id="product">
                <p><strong>Title</strong>: {book.name}</p>
                <p><strong>Author</strong>: {book.author}</p>
                <p><strong>Genre</strong>: {book.genre}</p>
                <p><strong>Price</strong>: {book.price}</p>
                <p><strong>Pages</strong>: {book.pages}</p>
                <p><strong>Description</strong>: {book.description}</p>
            </div>

        </div>
    );
    const renderServiceDetails = (tour) => (
        <div>
            <p><strong>Price</strong>: {tour.price}</p>
        </div>
    );



    return (
        <div>

            <MainHeader windowWidth={windowWidth} />
            {showLogin && <Login />}
            {showCart && <Cart />}
            <div id="product_description">
                <div id="button_container">
                    <button>
                        <NavLink to={`/`}>Return</NavLink>

                    </button>
                    <div id='product-title'>
                        Insert Item Name
                    </div>

                </div>
                <div>
                    {book ? renderProductDetails(book) : tour ? renderServiceDetails(tour) : <div>insert 404</div>}

                </div>
                <div id='buy_section'>Buy Information Section
            
                </div>

                <div id='comments-section'>Comments Section(not sure if we are gonna use it)</div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductIdPage;

ProductIdPage.propTypes = {
    productType: PropTypes.string,
};