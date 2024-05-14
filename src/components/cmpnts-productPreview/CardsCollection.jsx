// import CardM from './Card.jsx';
// import { ProductPreviewClick } from './ProductPreview-Click.jsx';
// import { useEffect, useState, useRef } from 'react';

// export const CardsCollection = () => {
//   const [productsData, setProductsData] = useState([]);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     fetch('http://localhost:8000/api/v1/books')
//       .then(res => res.json())
//       .then(data => {
//        /* const randomizedData = data.data.sort(() => 0.5 - Math.random()); */
//         const randomizedData = data.data;  

//         // Randomize the data
//         setProductsData(randomizedData);
//       })
//       .catch(err => console.log(err));
//   }, []);
/* /////////////////////////////////////////////////////////////////////////////////// */

/*   useEffect(() => {
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const cardsContainer = cardsContainerRef.current;

    if (scrollLeftButton && scrollRightButton && cardsContainer) {
      scrollLeftButton.addEventListener('click', () => {
        const firstCard = cardsContainer.firstChild;

        cardsContainer.appendChild(firstCard);
      });

      scrollRightButton.addEventListener('click', () => {
        const lastCard = cardsContainer.lastChild;

        cardsContainer.insertBefore(lastCard, cardsContainer.firstChild);
      });
    }
  }, []); */
/*   const scroll = (direction) => {
    const cardsContainer = cardsContainerRef.current;
    const cardWidth = cardsContainer.firstChild.getBoundingClientRect().width;
    const scrollDistance = direction === 'left' ? -cardWidth : cardWidth;

    cardsContainer.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
  }; */
/*   const scroll = (direction) => {
    const cardsContainer = cardsContainerRef.current;
    cardsContainer.style.transition = 'none';
  
    if (direction === 'left') {
      const lastCard = cardsContainer.lastChild;
      cardsContainer.style.transform = `translateX(-${lastCard.offsetWidth}px)`;
      cardsContainer.insertBefore(lastCard, cardsContainer.firstChild);
    } else if (direction === 'right') {
      const firstCard = cardsContainer.firstChild;

      cardsContainer.style.transform = `translateX(${firstCard.offsetWidth}px)`;

      cardsContainer.appendChild(firstCard);
    } */

//cardsContainer.offsetHeight;
/*     setTimeout(() => {
      cardsContainer.style.transition = 'transform 0.3s ease';
      cardsContainer.style.transform = 'translateX(0)';
    }, 60);
  }; */

//   return (
//     <div>
//       <div id='cards-collection'>
//         <button id="scroll-left" className="scroll-button">←</button>
//         <div id="cards-container" ref={cardsContainerRef} style={{ display: 'flex'}}>
//           {productsData.slice(0, 7).map((card, index) => (
//             <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
//               <div className='card-container pointer'>
//                 <CardM card={card} /> {/* Pass the object as property */}
//               </div>
//             </ProductPreviewClick>
//           ))}
//         </div>
//         <button id="scroll-right" className="scroll-button">→</button>
//       </div>
//     </div>
//   );
// };

// export default CardsCollection;
/* //////////////////////////////////////////////////////////////////////////// */
// return (
//   <div id='cards-collection'>
// {/*     <button onClick={() => scroll('left')}id='scroll-left' className="scroll-button">←</button> */}
//     <div id="cards-container" ref={cardsContainerRef}>
//       {productsData.map((card, index) => (
//         <ProductPreviewClick key={index} id={card._id} productType={card.productType}>
//           <div className='card-container pointer'>
//             <CardM card={card} />
//           </div>
//         </ProductPreviewClick>
//       ))}
//     </div>
// {/*     <button onClick={() => scroll('right')} id='scroll-right'  className="scroll-button">→</button> */}
//   </div>
// );
// };

// export default CardsCollection;

import { useEffect, useState, useRef } from 'react';
import CardM from './Card.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';

export const CardsCollection = () => {
  const [productsData, setProductsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/books')
      .then(res => res.json())
      .then(data => {
        const randomizedData = data.data;
        setProductsData(randomizedData);
      })
      .catch(err => console.log(err));
  }, []);

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      next();
    } else {
      prev();
    }
  };

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + productsData.length) % productsData.length);
  };

  const getCardClass = (index) => {
    console.log("index: ", index, " activeIndex: ", activeIndex);
    if (index === activeIndex) {
      console.log("act");
      return 'act';
    }
    if (index === (activeIndex - 1 + productsData.length) % productsData.length){
      console.log("actprev");
      return 'actprev';
    }
    if (index === (activeIndex + 1) % productsData.length){
      console.log("actnext");
      return 'actnext';
    }
    /* if (index === (activeIndex - 1 + productsData.length) % productsData.length) { */
    if (index === (activeIndex + 2) % productsData.length) {
   console.log("next");
      return 'next';
    }
    /* if (index === (activeIndex - 1 + productsData.length) % productsData.length) { */
    if (index === (activeIndex - 2 + productsData.length) % productsData.length) {
   console.log("prev");
      return 'prev';
    }
    console.log("hide");
    return 'hide';
  };

  return (
    <div id='cards-collection' onWheel={handleWheel}>
      <ul id="cards-container" className="list" ref={cardsContainerRef}>
        {productsData.map((card, index) => (
          <li key={card._id} className={getCardClass(index)}>
            <ProductPreviewClick id={card._id} productType={card.productType}>
              <div className='card-container pointer'>
                <CardM card={card} />
              </div>
            </ProductPreviewClick>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsCollection;

