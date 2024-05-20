import { useRef, useEffect } from 'react';
import BooksCollection from "./BooksCollection.jsx";
import '../../style/ProductsPreview.css'
import ToursCollection from './ToursCollection.jsx'
import PcPartsCollection from './PcPartsCollection.jsx';
import VideoGamesCollection from './VideoGamesCollection.jsx'

export const ProductsPreview = () => {
    const collectionsContainerRef = useRef(null);

    
    const collectionWidth = 300;

    const handleWheel = (event) => {
        if (collectionsContainerRef.current) {
            const container = collectionsContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (event.deltaY > 0) {
                if (scrollLeft >= maxScrollLeft - collectionWidth) {
                    // if we are on the end, go bak to the beginning
                    container.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    container.scrollTo({ left: scrollLeft + collectionWidth, behavior: 'smooth' });
                }
            } else {
                if (scrollLeft <= collectionWidth) {
                    // if we are on teh beginning, go to the end
                    container.scrollTo({ left: maxScrollLeft, behavior: 'auto' });
                } else {
                    container.scrollTo({ left: scrollLeft - collectionWidth, behavior: 'smooth' });
                }
            }
        }
    };

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

