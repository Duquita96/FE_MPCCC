import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Homepage from './src/components/Homepage';
import NotFound from './src/components/NotFound';
import ProductPage from './src/components/ProductPage.jsx';
import ProductPreviewId from './src/components/cmpnts-productPreview/ProductPreviewId.jsx';

function App() {

  const [windowWidth, setWindowWith] = useState(window.innerWidth)
  const handleResize = () => {setWindowWith(window.innerWidth)};
  window.addEventListener("resize", handleResize);

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage windowWidth={windowWidth} />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/productId' element={<ProductPreviewId />} />
      </Routes>
    </>
  )
}
export default App;
