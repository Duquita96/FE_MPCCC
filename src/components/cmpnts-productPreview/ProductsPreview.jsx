
// import CardsCollection from "./CardsCollection.jsx";
// import '../../style/ProductsPreview.css'
// import ToursCollection from './ToursCollection.jsx'
// import PcPartsCollection from './PcPartsCollection.jsx';
// import VideoGamesCollection from './VideoGamesCollection.jsx'
// /* import {Link} from 'react-router-dom'; */


// export const ProductsPreview = () => {

//     return (
//         <div id="products-preview-section">
//             <ToursCollection />
//             <div>
//                 <CardsCollection />
//                 <PcPartsCollection />
//                 <VideoGamesCollection />
//             </div>

//         </div>
//     );
// }

// export default ProductsPreview;

import { useRef, useEffect } from 'react';
import BooksCollection from "./BooksCollection.jsx";
import '../../style/ProductsPreview.css'
import ToursCollection from './ToursCollection.jsx'
import PcPartsCollection from './PcPartsCollection.jsx';
import VideoGamesCollection from './VideoGamesCollection.jsx'

export const ProductsPreview = () => {
    const collectionsContainerRef = useRef(null);

    // Asumiendo que cada colección tiene el mismo ancho fijo
    const collectionWidth = 300; // Reemplaza con el ancho real de tus colecciones

    const handleWheel = (event) => {
        if (collectionsContainerRef.current) {
            const container = collectionsContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (event.deltaY > 0) {
                if (scrollLeft >= maxScrollLeft - collectionWidth) {
                    // Si estamos al final, volvemos al principio sin animación
                    container.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    container.scrollTo({ left: scrollLeft + collectionWidth, behavior: 'smooth' });
                }
            } else {
                if (scrollLeft <= collectionWidth) {
                    // Si estamos al principio, saltamos al final sin animación
                    container.scrollTo({ left: maxScrollLeft, behavior: 'auto' });
                } else {
                    container.scrollTo({ left: scrollLeft - collectionWidth, behavior: 'smooth' });
                }
            }
        }
    };

    // Ajusta el desplazamiento inicial para el duplicado del primer elemento
    useEffect(() => {
        if (collectionsContainerRef.current) {
            collectionsContainerRef.current.scrollLeft = collectionWidth;
        }
    }, []);

    return (
        <div id="products-preview-section">
            <ToursCollection />
            <div id="collections-container" ref={collectionsContainerRef} onWheel={handleWheel} >
                <VideoGamesCollection />
                <BooksCollection />
                <PcPartsCollection />
            </div>
        </div>
    );
}

export default ProductsPreview;

