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
import { RiPaypalFill, RiVisaFill, RiMastercardLine, RiBankFill, RiCalendarScheduleFill } from "react-icons/ri";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";



export const ProductIdPage = ({ productType }) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [tour, setTour] = useState(null);
    const [imgPath, setImgPath] = useState(null);


    const { showLogin, showCart } = useContext(HeaderContext)
    const { windowWidth } = useContext(WidthContext)
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);



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
                <img src={imgPath} alt={"productImage"} />
            </div>

            <div className="product">
                <p><strong>Title</strong>: {book.name}</p>
                <p><strong>Author</strong>: {book.author}</p>
                <p><strong>Genre</strong>: {book.genre}</p>
                <p><strong>Price</strong>: {book.price}</p>
                <p><strong>Pages</strong>: {book.pages}</p>
                <p>
                    <strong>Description</strong>:
                    {isDescriptionExpanded ? book.description : `${book.description.substring(0, 400)}...`}
                    <button className="viewMoreButton" onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
                        {isDescriptionExpanded ? ' <<' : ' >>'}
                    </button>
                </p>
                <div>
<button>Add</button>
                </div>
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
                <p><strong>Name:</strong>: {tour.name}</p>
                <p><strong>Group Size:</strong>: {tour.maxGroupSize}</p>
                <p><strong>Difficulty</strong>: {tour.difficulty}</p>
                <p><strong>Price</strong>: {tour.price}</p>
                <p><strong>Duration:</strong>: {tour.duration}h</p>
                <p>
                    <strong>Description</strong>:
                    {isDescriptionExpanded ? tour.description : `${tour.description.substring(0, 400)}...`}
                    <button className="viewMoreButton" onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
                        {isDescriptionExpanded ? ' <<' : ' >>'}
                    </button>
                </p>
                <div>
                    <button>Reserve</button>
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
                    <button>
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