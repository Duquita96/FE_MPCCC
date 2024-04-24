import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Homepage from './src/components/pages/Homepage.jsx';
import NotFound from './src/components/pages/NotFound.jsx';
import ProductPage from './src/components/ProductPage.jsx';
import ProductPreviewId from './src/components/ProductPreview/ProductPreviewId.jsx';

function App() {

  const [windowWidth, setWindowWith] = useState(window.innerWidth)
  const handleResize = () => {setWindowWith(window.innerWidth)};
  window.addEventListener("resize", handleResize);

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage windowWidth={windowWidth} />} />
        <Route path='/product' element={<ProductPage windowWidth={windowWidth} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/productId' element={<ProductPreviewId />} />
      </Routes>
    </>
  )
}
export default App;
