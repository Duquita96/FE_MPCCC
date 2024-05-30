//React libraries and ohers
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

//Components
import GenericCard from '../cmpnts-productPreview/GenericCard.jsx';
import { ProductPreviewClick } from '../cmpnts-productPreview/ProductPreview-Click.jsx';
import { ToursTypeContext } from '../../context/TypesContext.jsx';

//CSS
import '../../style/ProductsPage.css';

export const FilterPageCollection = ({ productType, toursType }) => {
  const [filterData, setProductsData] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [toursTypeFilter, setToursTypeFilter] = useState('');
  const { setTourType } = useContext(ToursTypeContext);
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');
  const [genres, setGenres] = useState([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [videoGameGenres, setVideoGameGenres] = useState([]);
  const [pcPartsCategory, setPcPartsCategory] = useState([]);


  const navigate = useNavigate();



  const changeFilter = (filterType, toursType = '', genre = '', category = '') => {
    setCurrentFilter(filterType);
    setToursTypeFilter(toursType); // Filter Tour Type
    setTourType(toursType); // Context TourType
    setGenre(genre); // Stablish genre
    setCategory(category) // Stablish category
    if (filterType === 'books' || filterType === 'video-games' || filterType === 'pc-parts') {
      setShowFilterOptions(!showFilterOptions);
    }
    navigate(`/filter-page/${filterType}`);
  };



  const [priceRange, setPriceRange] = useState({
    range1: false,
    range2: false,
    range3: false,
  });

  const handleCheckboxChange = event => {
    setPriceRange({
      ...priceRange,
      [event.target.name]: event.target.checked,
    });
  };

  const GoBack = () => {
    setTourType('');
    navigate('/');
  };

  useEffect(() => {
    if (productType) {
      setCurrentFilter(productType);
    }
    if (productType) {
      setToursTypeFilter(toursType);
    }
  }, [productType, toursType]);


  useEffect(() => {
    const fetchGenres = async (url, setGenresFunction) => {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueGenres = [...new Set(data.data.map(item => item.genre))];
      setGenresFunction(uniqueGenres);
    };

    fetchGenres('http://localhost:8000/api/v1/books', setGenres);
    fetchGenres('http://localhost:8000/api/v1/video-games', setVideoGameGenres);
    fetch('http://localhost:8000/api/v1/pc-parts')
      .then(response => response.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.data.map(item => item.category))];
        setPcPartsCategory(uniqueCategories);
      })
  }, []);



  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/v1/books').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/tours').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/video-games').then(res => res.json()),
      fetch('http://localhost:8000/api/v1/pc-parts').then(res => res.json()),
    ])
      .then(([booksData, toursData, videoGamesData, pcPartsData]) => {
        // Combine and randomize the data
        const combinedData = [
          ...booksData.data,
          ...toursData.data,
          ...videoGamesData.data,
          ...pcPartsData.data,
        ];
        const randomizedData = combinedData.sort(() => 0.5 - Math.random());
        setProductsData(randomizedData);
      })
      .catch(err => console.log(err));
  }, []);

  const filteredData = filterData
    .filter(item => {
      if (currentFilter === 'all-products') {
        //exclude tours from the filter
        return item.productType !== 'tours';
      }
      if (currentFilter === 'all') {
        //include All items
        return true;
      } else {
        // Specific Filters
        return item.productType === currentFilter;
      }
    })

    .filter(item => {
      if (!genre) {
        return true;
      } else {
/*         console.log("item.genre: ", item.genre); */
        return item.genre === genre;
      }
    })
    .filter(item => {
      if (!category) {
        return true;
      } else {
        return item.category === category;
      }
    })


    .filter(item => !toursTypeFilter || item.toursType === toursTypeFilter)
    .filter(item => {
      if (!priceRange.range1 && !priceRange.range2 && !priceRange.range3) {
        return true;
      }
      if (priceRange.range1 && item.price >= 1 && item.price <= 50) {
        return true;
      } else if (priceRange.range2 && item.price >= 51 && item.price <= 100) {
        return true;
      } else if (priceRange.range3 && item.price >= 101 && item.price <= 200) {
        return true;
      }
      return false;
    });

  return (
    <div id='allProducts-container'>
      <div className='ProductsPage_Filter'>
        <div id='buttonTitleContainer'>
          <button
            className='goBack-button'
            id='ButtonFilter-GoBack'
            onClick={GoBack}>
            <BsFillArrowLeftSquareFill id='arrowIcon' />
          </button>
          <h3 className='titleH3' id='categoriesTitle'>
            Categories
          </h3>
        </div>
        <li
          className='pointer prodSerFilter'
          onClick={() => changeFilter('all')}>
          All Products and Services
        </li>
        <br />
        <div>
          <h3 className='titleH3'>Products</h3>
          <ul>
            <li
              className='pointer prodSerFilter'
              onClick={() => changeFilter('all-products')}>
              All Products
            </li>
            <br />
            <li
              className='pointer prodSerFilter'
              onClick={() => {
                if (currentFilter !== 'books') {
                  changeFilter('books');
                }
                setShowFilterOptions(!showFilterOptions);
              }}>
              Books
            </li>

            {currentFilter === 'books' && showFilterOptions && (
              <ul><br />
                {genres.map(genre => (
                  <li
                    key={genre}
                    className='pointer prodSerFilter'
                    onClick={() => setGenre(genre)}>
                    {genre}
                  </li>
                ))}
                <br />
              </ul>
            )}

            <li
              className='pointer prodSerFilter'
              onClick={() => {
                if (currentFilter !== 'pc-parts') {
                  changeFilter('pc-parts');
                }
                setShowFilterOptions(!showFilterOptions);
              }}>
              Pc Parts
            </li>

            {currentFilter === 'pc-parts' && showFilterOptions && (
              <ul><br />
                {pcPartsCategory.map(category => (
                  <li
                    key={category}
                    className='pointer prodSerFilter'
                    onClick={() => setCategory(category)}>
                    {category}
                  </li>
                ))}
                <br />
              </ul>
            )}

            <li
              className='pointer prodSerFilter'
              onClick={() => {
                if (currentFilter !== 'video-games') {
                  changeFilter('video-games');
                }
                setShowFilterOptions(!showFilterOptions);
              }}>
              Video Games
            </li>
            {currentFilter === 'video-games' && showFilterOptions && (
              <ul>
                <br />
                {videoGameGenres.map(genre => (
                  <li
                    key={genre}
                    className='pointer prodSerFilter'
                    onClick={() => setGenre(genre)}>
                    {genre}
                  </li>
                ))}
                <br />
              </ul>
            )}
          </ul>
        </div>
        <div>
          <br />
          <div className='ProductPagePriceFilterBox'>
            <h3 className='titleH3'>Price</h3>
            <div className='priceCheckbox'>
              <label>
                <input
                  type='checkbox'
                  name='range1'
                  checked={priceRange.range1}
                  onChange={handleCheckboxChange}
                  className='checkBox'
                />{' '}
                €1 - €50
              </label>
              <label>
                <input
                  type='checkbox'
                  name='range2'
                  checked={priceRange.range2}
                  onChange={handleCheckboxChange}
                  className='checkBox'
                />
                €51 - €100
              </label>
              <label>
                <input
                  type='checkbox'
                  name='range3'
                  checked={priceRange.range3}
                  onChange={handleCheckboxChange}
                  className='checkBox'
                />
                €101 - €200
              </label>
            </div>
          </div>
        </div>

        <div>
          <br />
          <h3 className='titleH3'>Services</h3>
          <ul>
            <li
              className='pointer prodSerFilter'
              onClick={() => changeFilter('tours', '')}>
              All Tours
            </li>
            <br />
            <li
              className='pointer prodSerFilter'
              onClick={() => changeFilter('tours', 'sightseeing')}>
              Sightseeing
            </li>
            <li
              className='pointer prodSerFilter'
              onClick={() => changeFilter('tours', 'hiking')}>
              Hiking
            </li>
            <li
              className='pointer prodSerFilter'
              onClick={() => changeFilter('tours', 'museum')}>
              Museum
            </li>
          </ul>
        </div>
        <br></br>
      </div>

      <div id='filter-collection'>
        {filteredData.map(card => (
          /* Llena el contenido de las tarjetas "card" que se han filtrado */
          <ProductPreviewClick
            key={card._id}
            id={card._id}
            productType={card.productType}>
            <div className='carrousell pointer'>
              {['books', 'video-games', 'pc-parts', 'tours'].includes(
                card.productType
              ) && (
                  <GenericCard
                    card={card}
                    productType={card.productType}
                    hideImg={false}
                    className={card.productType === 'tours' ? 'toShow' : ''}
                  />
                )}
            </div>
          </ProductPreviewClick>
        ))}
      </div>
    </div>
  );
};

export default FilterPageCollection;

FilterPageCollection.propTypes = {
  productType: PropTypes.string,
  toursType: PropTypes.string,
};
