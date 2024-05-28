//React libraries and others
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

//Components
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import { HeaderContext } from "../../context/HeaderContextProvider.jsx";
import { cartContext } from "../../context/CartContextProvider.jsx";
import { WidthContext } from "../../context/WidthContextProvider.jsx";
import { UserContext } from "../../context/UserContextProvider.jsx";
import { getImagePath } from "../cmpnts-productPreview/GenericCard.jsx";
import Comments from "../cmpnts-productPreview/Comments.jsx";
import PageWrapper from "../PageWrapper.jsx";
import MobileNavBar from "../../components/cmpnts-homepage-navbars/MobileNavBar.jsx";

//css
import "../../style/productIdPage.css";

//icons
import {
  RiPaypalFill,
  RiVisaFill,
  RiMastercardLine,
  RiBankFill,
  RiCalendarScheduleFill,
} from "react-icons/ri";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export const ProductIdPage = ({ productType }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [tour, setTour] = useState(null);
  const [pcParts, setPcParts] = useState(null);
  const [videoGames, setVideoGames] = useState(null);
  const [imgPath, setImgPath] = useState(null);
  const navigate = useNavigate();

  const { addToCart } = useContext(cartContext);
  const { showLogin, showCart, toggleFeedbackMsg } = useContext(HeaderContext);
  const { windowWidth } = useContext(WidthContext);
  const { loggedIn } = useContext(UserContext);

    /** Displays a confirmation of succesfull add-to-cart for 3 seconds */
    const confirmAddToCart = () => {toggleFeedbackMsg(3); setTimeout(() => {toggleFeedbackMsg(0)}, 3000)}


  const handleGoBack = () => {navigate(-1)};

  const addItem = () => {
    let objToAdd;
    productType === "books"
      ? (objToAdd = {
          productId: book._id,
          name: book.name,
          productType: book.productType,
          price: book.price,
        })
      : productType === "tours"
      ? (objToAdd = {
          productId: tour._id,
          name: tour.name,
          productType: tour.productType,
          price: tour.price,
        })
      : productType === "video-games"
      ? (objToAdd = {
          productId: videoGames._id,
          name: videoGames.name,
          productType: videoGames.productType,
          price: videoGames.price,
        })
      : (objToAdd = {
          productId: pcParts._id,
          name: pcParts.name,
          productType: pcParts.productType,
          price: pcParts.price,
        });
    addToCart(objToAdd);
    confirmAddToCart();
  };

  productType === "tours";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/${productType}/${id}`
        );
        const data = await response.json();
        switch (productType) {
          case "books":
            setBook(data.data);
            setImgPath(getImagePath(data.data));
            break;
          case "tours":
            setTour(data.data);
            setImgPath(getImagePath(data.data));
            break;
          case "pc-parts":
            setPcParts(data.data);
            setImgPath(getImagePath(data.data));
            break;
          case "video-games":
            setVideoGames(data.data);
            setImgPath(getImagePath(data.data));
            break;
          default:
            break;
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id, productType]);
  const renderProductDetails = (book) => (
    <div className="product_section">
      <div className="imgContainer">
        <Zoom zoomMargin={10}>
          <img src={imgPath} alt={"productImage"} className="zoomImg" />
        </Zoom>
      </div>

      <div className="product">
        <>
          <p id="p-title" className="p-height">
            <strong>Title</strong>: {book.name}
          </p>
          <p id="p-author" className="p-height">
            <strong>Author</strong>: {book.author}
          </p>
          <p id="p-genre" className="p-height">
            <strong>Genre</strong>: {book.genre}
          </p>
          <p id="p-price" className="p-height">
            <strong>Price</strong>: {book.price}
          </p>
          <p id="p-pages" className="p-height">
            <strong>Pages</strong>: {book.pages}
          </p>
          <p id="p-description" className="description-box">
            <strong>Description</strong>: {book.description}
          </p>
          <div>
            <button
              className="add-to-crt"
              disabled={!loggedIn}
              onClick={addItem}
              style={{ backgroundColor: loggedIn ? null : "grey" }}
            >
              {loggedIn ? "Add to Cart" : "Not logged in"}
            </button>
          </div>
        </>
      </div>
    </div>
  );
  const renderServiceDetails = (tour) => (
    <div className="product_section">
      <div className="imgContainer">
        <Zoom zoomMargin={10}>
          <img src={imgPath} alt={"productImage"} className="zoomImg" />
        </Zoom>
      </div>

      <div className="product">
        <p id="t-title" className="p-height">
          <strong>Name</strong>: {tour.name}
        </p>
        <p id="t-author" className="p-height">
          <strong>Group Size</strong>: {tour.maxGroupSize}
        </p>
        <p id="t-genre" className="p-height">
          <strong>Difficulty</strong>: {tour.difficulty}
        </p>
        <p id="t-price" className="p-height">
          <strong>Price</strong>: {tour.price}
        </p>
        <p id="t-pages" className="p-height">
          <strong>Duration</strong>: {tour.duration}h
        </p>
        <p id="t-description" className="description-box">
          <strong>Description</strong>:{tour.description}
        </p>
        <div id="add-button-container">
          <button
            className="add-to-crt"
            disabled={!loggedIn}
            onClick={addItem}
            style={{ backgroundColor: loggedIn ? null : "grey" }}
          >
            {loggedIn ? "Reserve" : "Not logged in"}
          </button>
        </div>
      </div>
    </div>
  );
  const renderPcDetails = (pcParts) => {
    return (
      <div className="product_section">
        <div className="imgContainer">
          <Zoom zoomMargin={10}>
            <img src={imgPath} alt={"productImage"} className="zoomImg" />
          </Zoom>
        </div>

        <div className="product">
          <>
            <p id="p-title" className="p-height">
              <strong>Name</strong>: {pcParts.name}
            </p>
            <p id="p-author" className="p-height">
              <strong>Brand</strong>: {pcParts.brand}
            </p>
            <p id="p-genre" className="p-height">
              <strong>Category</strong>: {pcParts.category}
            </p>
            <p id="p-price" className="p-height">
              <strong>Price</strong>: {pcParts.price}
            </p>
            <p id="p-description" className="description-box">
              <strong>Description</strong>: {pcParts.description}
            </p>
            <div>
              <button
                className="add-to-crt"
                disabled={!loggedIn}
                onClick={addItem}
                style={{ backgroundColor: loggedIn ? null : "grey" }}
              >
                {loggedIn ? "Add to Cart" : "Not logged in"}
              </button>
            </div>
          </>
        </div>
      </div>
    );
  };

  const renderVideoGamesDetails = (videoGames) => {
    return (
      <div className="product_section">
        <div className="imgContainer">
          <Zoom zoomMargin={10}>
            <img src={imgPath} alt={"productImage"} className="zoomImg" />
          </Zoom>
        </div>

        <div className="product">
          <>
            <p id="p-title" className="p-height">
              <strong>Name</strong>: {videoGames.name}
            </p>
            <p id="p-author" className="p-height">
              <strong>Brand</strong>: {videoGames.brand}
            </p>
            <p id="p-genre" className="p-height">
              <strong>Category</strong>: {videoGames.category}
            </p>
            <p id="p-price" className="p-height">
              <strong>Price</strong>: {videoGames.price}
            </p>
            <p id="p-description" className="description-box">
              <strong>Description</strong>: {videoGames.description}
            </p>
            <div>
              <button
                className="add-to-crt"
                disabled={!loggedIn}
                onClick={addItem}
                style={{ backgroundColor: loggedIn ? null : "grey" }}
              >
                {loggedIn ? "Add to Cart" : "Not logged in"}
              </button>
            </div>
          </>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageWrapper>
        {showLogin && <Login />}
        {showCart && <Cart />}
        {windowWidth <= 768 && <MobileNavBar />}
        <div id="product_description">
          <div className="button_container">
            <button className="filter-goBack-button" onClick={handleGoBack}>
              <BsFillArrowLeftSquareFill id="arrowIcon" />
            </button>
            <div id="product-title">
              {book
                ? book.name
                : tour
                ? tour.name
                : pcParts
                ? pcParts.name
                : videoGames
                ? videoGames.name
                : "Item Name"}
            </div>
          </div>
          <div>
            {book ? (
              renderProductDetails(book)
            ) : tour ? (
              renderServiceDetails(tour)
            ) : pcParts ? (
              renderPcDetails(pcParts)
            ) : videoGames ? (
              renderVideoGamesDetails(videoGames)
            ) : (
              <div>insert 404</div>
            )}
          </div>
          <div id="buy_section">
            <div>
              <RiPaypalFill id="paypalIcon" className="buyIcon" />
            </div>
            <div>
              <RiVisaFill id="visaIcon" className="buyIcon" />
            </div>
            <div>
              <RiMastercardLine id="masterIcon" className="buyIcon" />
            </div>
            <div>
              <RiBankFill id="bankIcon" className="buyIcon" />
            </div>
            <div>
              <RiCalendarScheduleFill
                id="buyNowCalendarIcon"
                className="buyIcon"
              />
            </div>
          </div>

          <div id="comments-section">
            <Comments productType={productType} />
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
