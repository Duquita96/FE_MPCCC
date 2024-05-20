//React libraries
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

//componets

import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import HeaderContext from '../../context/HeaderContext.jsx';
import WidthContext from '../../context/WidthContext.jsx';
import { getBookImgPath } from '../cmpnts-productPreview/Book.jsx';
import { getTourImgPath } from '../cmpnts-productPreview/Tours.jsx';
import { getPcPartsImgPath } from '../cmpnts-productPreview/PcParts.jsx';
import { getVideoGamesImgPath } from '../cmpnts-productPreview/VideoGames.jsx';
import Comments from '../cmpnts-productPreview/Comments.jsx'
import PageWrapper from '../PageWrapper.jsx';
import MobileNavBar from "../../components/cmpnts-homepage-navbars/MobileNavBar.jsx";
//react
import { useNavigate } from 'react-router-dom';
//css
import '../../style/productIdPage.css'
//icons
import { RiPaypalFill, RiVisaFill, RiMastercardLine, RiBankFill, RiCalendarScheduleFill } from "react-icons/ri";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";



export const ProductIdPage = ({ productType }) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [tour, setTour] = useState(null);
    const [pcParts, setPcParts] = useState(null);
    const [videoGames, setVideoGames] = useState(null);
    const [imgPath, setImgPath] = useState(null);
    const navigate = useNavigate();

    const { showLogin, showCart } = useContext(HeaderContext)
    const { windowWidth } = useContext(WidthContext)

    const handleGoBack = () => {
        navigate(-1);
    };

/*     console.log('productType en ProductIdPage: ', productType); */
    useEffect(() => {

        if (productType === 'book') {
            fetch(`http://localhost:8000/api/v1/books/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setBook(data.data);
                    setImgPath(getBookImgPath(data.data));
                })
                .catch(err => console.log(err))
        } else if (productType === 'tour') {
            fetch(`http://localhost:8000/api/v1/tours/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTour(data.data);
                    setImgPath(getTourImgPath(data.data));
                })
                .catch(err => console.log(err))
        } else if (productType === 'pc_part') {

            fetch(`http://localhost:8000/api/v1/pc-parts/${id}`)
                .then(res => res.json())
                .then(data => {

                    setPcParts(data.data);
                    setImgPath(getPcPartsImgPath(data.data));
                })
                .catch(err => {
                    console.error(err);
                });
        } else if (productType === 'video_games') {
            fetch(`http://localhost:8000/api/v1/video-games/${id}`)
                .then(res => res.json())
                .then(data => {
                    setVideoGames(data.data);
                    setImgPath(getVideoGamesImgPath(data.data));
                })
        }


    }, [id]);
    const renderProductDetails = (book) => (
        <div className="product_section">
            <div className='imgContainer'>
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
            <div className='imgContainer'>
                <Zoom zoomMargin={10}>
                    <img src={imgPath} alt={"productImage"} className="zoomImg" />
                </Zoom>
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
    const renderPcDetails = (pcParts) => {

        return (
            <div className="product_section">
                <div className='imgContainer'>
                    <Zoom zoomMargin={10}>
                        <img src={imgPath} alt={"productImage"} className="zoomImg" />
                    </Zoom>
                </div>

                <div className="product">
                    <>
                        <p id='p-title' className='p-height'><strong>Name</strong>: {pcParts.name}</p>
                        <p id='p-author' className='p-height'><strong>Brand</strong>: {pcParts.brand}</p>
                        <p id='p-genre' className='p-height'><strong>Category</strong>: {pcParts.category}</p>
                        <p id='p-price' className='p-height'><strong>Price</strong>: {pcParts.price}</p>
                        <p id='p-description' className='description-box'>
                            <strong>Description</strong>: {pcParts.description}
                        </p>
                        <div>
                            <button className='add-to-cart'>Add to Cart</button>
                        </div>
                    </>
                </div>
            </div>
        );
    };

    const renderVideoGamesDetails = (videoGames) => {

        return (
            <div className="product_section">
                <div className='imgContainer'>
                    <Zoom zoomMargin={10}>
                        <img src={imgPath} alt={"productImage"} className="zoomImg" />
                    </Zoom>
                </div>

                <div className="product">
                    <>
                        <p id='p-title' className='p-height'><strong>Name</strong>: {videoGames.name}</p>
                        <p id='p-author' className='p-height'><strong>Brand</strong>: {videoGames.brand}</p>
                        <p id='p-genre' className='p-height'><strong>Category</strong>: {videoGames.category}</p>
                        <p id='p-price' className='p-height'><strong>Price</strong>: {videoGames.price}</p>
                        <p id='p-description' className='description-box'>
                            <strong>Description</strong>: {videoGames.description}
                        </p>
                        <div>
                            <button className='add-to-cart'>Add to Cart</button>
                        </div>
                    </>
                </div>
            </div>
        );
    };

    return (
        <div>

            <PageWrapper >
            {showLogin && <Login />}
            {showCart && <Cart />}
            {windowWidth <= 768 && <MobileNavBar />}
            <div id="product_description">
                <div className="button_container">
                    <button className='filter-goBack-button' onClick={handleGoBack}>
                        <BsFillArrowLeftSquareFill id='arrowIcon' />
                    </button>
                    <div id='product-title'>
                        {book ? book.name : tour ? tour.name : pcParts ? pcParts.name : videoGames ? videoGames.name : 'Item Name'}
                    </div>

                </div>
                <div>
                    {book ? renderProductDetails(book) :
                        tour ? renderServiceDetails(tour) :
                            pcParts ? renderPcDetails(pcParts) :
                                videoGames ? renderVideoGamesDetails(videoGames) :
                                    <div>insert 404</div>}

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

                    < Comments productType={productType} />
                </div>
            </div>

            </PageWrapper>
        </div>
    );
};

export default ProductIdPage;

ProductIdPage.propTypes = {
    productType: PropTypes.string,
  };
  