//React libraries
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

//componets
import MainHeader from '../MainHeader.jsx';
import Footer from '../Footer.jsx';
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';
import { getImgPath } from '../cmpnts-productPreview/Card.jsx';
import Comments from '../cmpnts-productPreview/Comments.jsx'
//css
import '../../style/productIdPage.css'
//icons
import { RiPaypalFill, RiVisaFill, RiMastercardLine, RiBankFill, RiCalendarScheduleFill } from "react-icons/ri";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";



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
        <div className="product_section">
            <div className='imgcontainer'>
                <Zoom zoomMargin={10}>
                    <img src={imgPath} alt={"productImage"} className="zoomImg" />
                </Zoom>
            </div>

            <div className="product">
                <>
                    <p id='p-title' className='p-height'><strong>Title</strong>: {book.name}</p>
                    <p id='p-author' className='p-height'><strong>Author</strong>: {book.author}</p>
                    <p id='p-genre' className='p-height'><strong>Genre</strong>: {book.genre}</p>
                    <p id='p-price' className='p-height'><strong>Price</strong>: {book.price}</p>
                    <p id='p-pages' className='p-height'><strong>Pages</strong>: {book.pages}</p>
                    <p id='p-description' className='description-box'>
                        <strong>Description</strong>: {book.description}
                    </p>
                    <div>
                        <button className='add-to-cart'>Add to Cart</button>
                    </div>
                </>
            </div>
        </div>
    );
    const renderServiceDetails = (tour) => (

        <div className="product_section">
            <div className='imgcontainer'>
                <img src={
                    tour.toursType === 'HIKING' ? '../src/assets/img/Hiking.jpeg' :
                        tour.toursType === 'MUSEUM' ? '../src/assets/img/Museum.jpeg' :
                            tour.toursType === 'SIGHTSEEING' ? '../src/assets/img/SightSeeing.jpeg' :
                                imgPath
                } alt={"productImage"} />
            </div>

            <div className="product">
                <p id='t-title' className='p-height'><strong>Name</strong>: {tour.name}</p>
                <p id='t-author' className='p-height'><strong>Group Size</strong>: {tour.maxGroupSize}</p>
                <p id='t-genre' className='p-height'><strong>Difficulty</strong>: {tour.difficulty}</p>
                <p id='t-price' className='p-height'><strong>Price</strong>: {tour.price}</p>
                <p id='t-pages' className='p-height'><strong>Duration</strong>: {tour.duration}h</p>
                <p id='t-description' className='description-box'><strong>Description</strong>:{tour.description}
                </p>
                <div id='add-button-container'>
                    <button className='add-to-cart'>Reserve</button>
                </div>
            </div>

        </div>


    );

    return (
        <div>

            <MainHeader windowWidth={windowWidth} />
            {showLogin && <Login />}
            {showCart && <Cart />}
            <div id="product_description">
                <div id="button_container">
                    <button className='goback-button'>
                        <NavLink to={`/`}><BsFillArrowLeftSquareFill id='arrowIcon' /></NavLink>

                    </button>
                    <div id='product-title'>
                        {book ? book.name : tour ? tour.name : 'Item Name'}
                    </div>

                </div>
                <div>
                    {book ? renderProductDetails(book) : tour ? renderServiceDetails(tour) : <div>insert 404</div>}

                </div>
                <div id='buy_section'>
                    <div>
                        <RiPaypalFill id='paypalIcon' className='buyIcon' />
                    </div>
                    <div>
                        <RiVisaFill id='visaIcon' className='buyIcon' />
                    </div>
                    <div>
                        <RiMastercardLine id='masterIcon' className='buyIcon' />
                    </div>
                    <div>
                        <RiBankFill id='bankIcon' className='buyIcon' />
                    </div>
                    <div>
                        <RiCalendarScheduleFill id='buyNowCalendarIcon' className='buyIcon' />
                    </div>
                </div>

                <div id='comments-section'>

                    < Comments/>
                    </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductIdPage;

ProductIdPage.propTypes = {
    productType: PropTypes.string,
};