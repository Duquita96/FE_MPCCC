// import { useEffect, useState, useRef } from 'react';
// import CardM from './Card.jsx';
// import { ProductPreviewClick } from './ProductPreview-Click.jsx';

// export const CardsCollection = () => {
//   const [productsData, setProductsData] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     fetch('http://localhost:8000/api/v1/books')
//       .then(res => res.json())
//       .then(data => {
//         const randomizedData = data.data;
//         setProductsData(randomizedData);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const handleWheel = (event) => {
//     if (event.deltaY > 0) {
//       next();
//     } else {
//       prev();
//     }
//   };

//   const next = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
//   };

//   const prev = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + productsData.length) % productsData.length);
//   };

//   const getCardClass = (index) => {
//     console.log("index: ", index, " activeIndex: ", activeIndex);
//     if (index === activeIndex) {
//       console.log("act");
//       return 'act';
//     }
//     if (index === (activeIndex - 1 + productsData.length) % productsData.length){
//       console.log("actprev");
//       return 'actprev';
//     }
//     if (index === (activeIndex + 1) % productsData.length){
//       console.log("actnext");
//       return 'actnext';
//     }
//     /* if (index === (activeIndex - 1 + productsData.length) % productsData.length) { */
//     if (index === (activeIndex + 2) % productsData.length) {
//    console.log("next");
//       return 'next';
//     }
//     /* if (index === (activeIndex - 1 + productsData.length) % productsData.length) { */
//     if (index === (activeIndex - 2 + productsData.length) % productsData.length) {
//    console.log("prev");
//       return 'prev';
//     }
//     console.log("hide");
//     return 'hide';
//   };

//   return (
//     <div id='cards-collection' onWheel={handleWheel}>
//       <ul id="cards-container" className="list" ref={cardsContainerRef}>
//         {productsData.map((card, index) => (
//           <li key={card._id} className={getCardClass(index)}>
//             <ProductPreviewClick id={card._id} productType={card.productType}>
//               <div className='card-container pointer'>
//                 <CardM card={card} />
//               </div>
//             </ProductPreviewClick>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CardsCollection;

import { useEffect, useState } from 'react';
import CardM from './Card.jsx';
import { ProductPreviewClick } from './ProductPreview-Click.jsx';

export const CardsCollection = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/books')
      .then(res => res.json())
      .then(data => {
        const randomizedData = data.data;
        setProductsData(randomizedData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div id='cards-collection'>
      <ul id="cards-container" /* className="list" */>
        {productsData.map((card) => (
          <li key={card._id}>
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
