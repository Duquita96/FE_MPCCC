import {Routes, Route} from 'react-router-dom';
import Homepage from './src/components/pages/Homepage.jsx';
import NotFound from './src/components/pages/NotFound.jsx';
import ProductPage from './src/components/ProductPage.jsx';
<<<<<<< HEAD
import ProductPreviewId from './src/components/cmpnts-productPreview/ProductPreviewId.jsx';
=======
import ProductPreviewId from './src/components/ProductPreview/ProductPreviewId.jsx';
import HeaderContextProvider from './src/context/HeaderContextProvider.jsx';
import WidthContextProvider from './src/context/WidthContextProvider.jsx';
>>>>>>> dev

function App() {

  return (
    <>
      <HeaderContextProvider>
        <WidthContextProvider>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/productId' element={<ProductPreviewId />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </WidthContextProvider>
      </HeaderContextProvider>
    </>
  )
}
export default App;
