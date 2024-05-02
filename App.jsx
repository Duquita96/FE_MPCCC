import { Routes, Route } from 'react-router-dom';
import Homepage from './src/components/pages/Homepage.jsx';
import NotFound from './src/components/pages/NotFound.jsx';
import ProductPage from './src/components/pages/ProductsPage.jsx';
import ProductIdPage from './src/components/pages/ProductIdPage.jsx';
import HeaderContextProvider from './src/context/HeaderContextProvider.jsx';
import WidthContextProvider from './src/context/WidthContextProvider.jsx';


function App() {

  return (
    <>
      <HeaderContextProvider>
        <WidthContextProvider>
          <Routes>
            <Route path='/' element={<Homepage />} />
            {/*<Route path='/product' element={<ProductPage />} />*/}
            <Route path='/filter-page' element={<ProductPage />} />
            <Route path='/book/:id' element={<ProductIdPage productType='book' />} />
            <Route path='/tour/:id' element={<ProductIdPage productType='tour' />} />


            <Route path='*' element={<NotFound />} />
          </Routes>
        </WidthContextProvider>
      </HeaderContextProvider>
    </>
  )
}

export default App;
